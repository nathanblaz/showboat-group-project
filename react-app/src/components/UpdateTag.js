import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateTag, getOneTag } from "../store/tag";


const UpdateTag = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {id} = useParams();


    const [name, setName] = useState("");
    const [formOpen, setFormOpen] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("tag_name", name);
        dispatch(updateTag(formData, id));
        console.log(id, "ID FROM UPDATE TAG COMPONENT*****************************")

        setFormOpen(false)
        history.push(`/tags/${id}`)
    }

    useEffect(() => {
        dispatch(getOneTag(id))
    }, [dispatch, id])

    return (
        <div>
            <button id="tag-bar-delete" onClick={() => setFormOpen(!formOpen)} >
                Edit
            </button>
                <div>
                    <>
                    {formOpen &&
                        <form onSubmit={handleSubmit}>
                            <div className="form-input-container" id='tag-bar'>
                                <input
                                    type="text"
                                    className="form-input"
                                    name="name"
                                    placeholder="Tag Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    }
                    </>
                </div>
        </div>


    )
}

export default UpdateTag;
