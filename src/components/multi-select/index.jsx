import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";

export const MultiSelect = ({
  raised = true,
  items,
  placeholder = "Select an Item",
  selectedItems: externalSelectedItems,
  onItemSelect,
  onItemRemove,
  onDropdownToggle,
  renderSelectedItem,
  renderDropdownItem,
}) => {
  const [internalSelectedItems, setInternalSelectedItems] = useState([]);
  const selectedItems = externalSelectedItems || internalSelectedItems; // Allow external control if provided

  const [opened, setIsOpened] = useState(false);
  const wrapperRef = useRef(null);
  const [wrapperClientHeight, setWrapperClientHeight] = useState(40);

  const onClickWrapper = () => {
    const newOpenedState = !opened;
    setIsOpened(newOpenedState);
    if (onDropdownToggle) onDropdownToggle(newOpenedState); // Notify parent
  };

  const handleSelectItem = (newItem) => {
    const newSelectedItems = [...selectedItems, newItem];
    if (!externalSelectedItems) setInternalSelectedItems(newSelectedItems);
    if (onItemSelect) onItemSelect(newItem); // Notify parent
  };

  const handleRemoveItem = (id) => {
    const updatedSelectedItems = selectedItems.filter((item) => item.id !== id);
    if (!externalSelectedItems) setInternalSelectedItems(updatedSelectedItems);
    if (onItemRemove) onItemRemove(id); // Notify parent
  };

  useEffect(() => {
    if (wrapperRef.current) {
      const newWrapperClientHeight = wrapperRef.current.clientHeight || 40;
      setWrapperClientHeight(newWrapperClientHeight);
    }
  }, [selectedItems]);

  useEffect(() => {
    if (selectedItems.length === items.length) {
      setIsOpened(false);
    }
  }, [selectedItems, items]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpened(false); // Close dropdown
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredItems = items.filter(
    (item) => selectedItems.findIndex((sel) => sel.id === item.id) === -1
  );

  return (
    <div
      className={`${styles.wrapper} ${raised ? styles.raised : ""}`}
      onClick={onClickWrapper}
      ref={wrapperRef}
    >
      <div className={styles.selectedItemsContainer}>
        {selectedItems.length === 0 && <span>{placeholder}</span>}
        {selectedItems.map((item) =>
          renderSelectedItem ? (
            renderSelectedItem(item, handleRemoveItem)
          ) : (
            <div
              key={item.id}
              className={styles.chip}
              onClick={(e) => e.stopPropagation()}
            >
              <span>{item.value}</span>
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveItem(item.id);
                }}
              >
                <FontAwesomeIcon icon={faTimes} fontSize="10px" color="gray" />
              </span>
            </div>
          )
        )}
      </div>
      <span className={styles.selectIcon}>
        <FontAwesomeIcon
          icon={opened ? faArrowUp : faArrowDown}
          fontSize="12px"
        />
      </span>
      {filteredItems.length > 0 && (
        <ul
          className={`${styles.dropDown} ${opened ? styles.opened : ""} ${
            raised ? styles.raised : ""
          }`}
          style={{ top: `${wrapperClientHeight - 10}px` }}
        >
          {filteredItems.map((item) =>
            renderDropdownItem ? (
              renderDropdownItem(item, handleSelectItem)
            ) : (
              <li
                key={item.id}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectItem(item);
                }}
              >
                {item.value}
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};
