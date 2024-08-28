import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let firstRender = useRef(true);
  const articleRef = useRef(null);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    console.log("articleRef", articleRef);
    // alert("count changed");
  }, [count]);

  const scrollUp = () => {
    // window.scrollTo({
    //   top: 1000,
    //   behavior: "smooth",
    // });
    articleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onHover = () => {
    const currentBg = articleRef.current.style.backgroundColor;
    if (currentBg === "yellow") {
      articleRef.current.style.backgroundColor = "white";
    } else {
      articleRef.current.style.backgroundColor = "yellow";
    }
  };

  const changeTitle = () => {
    articleRef.current.children[0].textContent = "Changed with useRef";
  };

  return (
    <>
      <h1>references in React</h1>
      <h2>Enter UseRef</h2>

      <div className="card">
        <h3>Count is {count}</h3>
        <button
          onClick={() => setCount((count) => count + 1)}
          style={{ marginRight: "10px" }}
        >
          Increment Count
        </button>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
        </div>
        <div
          className="article-container"
          ref={articleRef}
          onMouseEnter={onHover}
          onMouseLeave={onHover}
        >
          <h1>headline of my article</h1>
          <button onClick={changeTitle}>Change Title</button>
          <h2>date for article</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            quos praesentium consequuntur quas tempore possimus deleniti enim
            placeat neque expedita et, illum recusandae unde similique! Natus
            perspiciatis dolore nostrum animi dolores ut exercitationem minima,
            rem tempore nulla voluptas iusto amet aliquid hic error cumque aut,
            ipsam ducimus numquam, illo quis! Id debitis at commodi facilis
            doloremque, in nostrum vero fuga et voluptatibus quas sint suscipit
            dolore, eaque accusamus nemo necessitatibus quis, dicta est ratione
            nisi delectus unde illum. Harum ipsam blanditiis minus veritatis ad
            reiciendis ducimus totam! Consequatur sequi sit optio fugit
            obcaecati aspernatur! Ipsa, quod magnam non veritatis quasi minus
            corporis dolor quaerat commodi, nobis doloribus fugiat, facere modi
            assumenda quia sint! Velit laborum cumque, sunt aperiam iusto
            possimus, nulla, eaque voluptas dolorum quod aliquam ab veritatis
            voluptatum? Explicabo nulla veritatis itaque dolor nostrum numquam
            ut voluptatum quod perferendis est, incidunt deleniti eum
            repellendus reprehenderit velit nesciunt aperiam omnis consequuntur
            asperiores, officia perspiciatis dolorem ad distinctio? Unde aperiam
            delectus alias fuga. Adipisci dolores voluptas in pariatur fuga
            aliquid earum. Molestias ad quasi nobis inventore neque harum labore
            exercitationem saepe a consequuntur eum, veniam, minus tempora at
            fugiat culpa, corrupti quidem officia voluptas earum corporis nemo
            delectus aspernatur minima. Aut, facere quidem. Fugit illo omnis
            accusamus dicta earum eligendi sint doloremque molestiae, distinctio
            odit, nihil, repellat ipsa quam dolor quod fugiat veniam explicabo
            nobis consequatur. Delectus dignissimos impedit nihil iure doloribus
            autem ipsum deleniti consectetur corporis iste enim nemo in sint
            ipsam odit itaque reiciendis, dicta, expedita perspiciatis illo
            ratione! Magni quidem deserunt voluptatibus perferendis, maiores
            aperiam quasi impedit in! Nam officia, neque ex aut dolorem
            voluptatum eligendi ut suscipit sapiente temporibus, sed repudiandae
            rerum provident dignissimos doloremque hic sint esse quas. Sequi
            voluptas tempore sit atque quo, nesciunt facilis et reprehenderit,
            perspiciatis suscipit, asperiores autem dolorum ipsa ducimus nemo id
            vero numquam! Repellat molestias nulla dolor ad sed saepe recusandae
            ipsam tempore, error fuga vero accusamus, cum doloribus sapiente rem
            debitis maiores eligendi, temporibus fugit neque molestiae corporis
            non laboriosam veniam. Fugiat vitae eligendi quia quibusdam
            repudiandae sit perferendis nihil reprehenderit repellat, placeat
            sed sunt laboriosam labore saepe veniam eveniet rem odit aperiam?
            Dolorem incidunt provident delectus maxime impedit in ipsum non
            quidem nostrum, earum recusandae et aspernatur! Ea, harum, vitae
            quasi non culpa minus eveniet provident repellendus qui neque,
            distinctio laborum odio tempore. Dicta quae repellendus cum? Vitae
            error sint, porro ipsa alias quam rerum laboriosam eum voluptates
            corporis quaerat similique veritatis suscipit iure incidunt nam
            ratione ab voluptas expedita excepturi debitis id totam officia.
            Qui, perferendis possimus quisquam placeat rem maiores dignissimos
            laborum obcaecati nostrum necessitatibus ex molestiae iusto corporis
            architecto quasi voluptatum ea, tempora explicabo. Explicabo itaque
            asperiores architecto quia assumenda non consectetur sunt placeat ut
            saepe suscipit quasi voluptatem, perspiciatis fuga? Debitis quisquam
            voluptatem molestias mollitia corrupti, voluptates magni fuga
            nesciunt blanditiis natus voluptas nisi perferendis unde! Quam
            consequatur dolores laboriosam placeat animi, illo blanditiis ab sed
            in possimus facere assumenda! Eius vel repellat aliquid! Sunt omnis
            delectus eos tempore quam, vero aliquid autem earum.
          </p>
          <button onClick={scrollUp}>Go to top</button>
        </div>
      </div>
    </>
  );
}

export default App;
