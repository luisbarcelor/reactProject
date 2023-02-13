import React, {useEffect, useState} from "react";
import "./styles/about.css";

function About() {
    const [datalist, setDatalist] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => setDatalist(res));
    });

    return(
        <div id="main">
          <div id="container">
            <div id="innerContainer">
              <h1>Sobre nosotros <span dangerouslySetInnerHTML={{__html: '&#128214'}}></span></h1>
              <div id="input">
                <table id="table" className="table">
                  <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                    <th scope="col">User ID</th>
                    <th scope="col">ID</th>
                  </tr>
                  </thead>
                  <tbody>
                      {datalist.map(data => {
                          return(
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.body}</td>
                                <td>{data.id}</td>
                                <td>{data.userId}</td>
                            </tr>
                          )
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
}

export default About;