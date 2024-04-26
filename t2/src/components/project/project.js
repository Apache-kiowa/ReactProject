import {NavLink} from "react-router-dom";
import './style.css';



function Project({title, img, index}) {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                    <img src={img} alt="Project img" className="project__img"/>
                    <h3 className="project__title">{title}</h3>
            </li>
        </NavLink>
    );
}

export default Project;