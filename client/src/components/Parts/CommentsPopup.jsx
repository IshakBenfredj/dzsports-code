// import { useContext } from 'react';
// import { AdminContext } from '../../context/UserContext';
// import AddComment from './AddComment';
import Comment from './Comment';

const CommentsPopup = ({ onClose,comments,postId }) => {

    // const admin = useContext(AdminContext);

    return (
        <div className="popup-container inset-0">
            <div className="popup-content bg-white rounded-lg p-6">
                <div className="popup-header flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold">التعليقات <small className='text-xl'>{comments.length}</small></h2>
                    <span
                        onClick={onClose}
                    >
                        ×
                    </span>
                </div>
                {/* <AddComment postId={postId} userId={admin._id} /> */}
                <div className="popup-comments space-y-4">
                    {comments ? comments.slice().reverse().map(comment => <Comment key={comment._id} comment={comment} postId={postId} />) 
                    : <h2 className='text-center font-bold text-2xl'>ليس هناك تعليقات</h2>}
                </div>
            </div>
        </div>
    );
};

export default CommentsPopup;