import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { deletePhoto } from "../../store/photo";
    
const DeleteForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    console.log ('id is', id);
    console.log ('id type is', typeof id);

    const handleSubmit = async (e) => {
        console.log('here I am in the handleSubmit');
        e.preventDefault();
        await dispatch(deletePhoto(id));
        console.log('Deleted event!');
        history.push('/');
    }

    return (
        <div>
            Are you sure you want to delete?

            <button onClick={handleSubmit}>Confirm</button>
        </div>
    )
}

export default DeleteForm;
