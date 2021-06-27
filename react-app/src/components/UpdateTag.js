import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateTag, renderPhotoTags } from "../store/tag";


const UpdateTag = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const tags = useSelector(state => Object.values(state.tagReducer));

    const singleTag = tags.filter(tag => {
        if (tag.id === Number(id)) return tag
    })
    // console.log(singleTag[0]?.name, "from UpdateTag**************")

    const [name, setName] = useState("");
    const [formOpen, setFormOpen] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("singleTagName", singleTag[0]?.name);
        setName("")

        console.log(id, '**************ID*********')
        
        dispatch(updateTag(formData, id));
        dispatch(renderPhotoTags());
    }

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
