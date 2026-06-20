import "../Components_style/DeleteModal.css"

function DeleteModal({ closeModal, confirmDelete }) {


return (

<div className="modal-overlay">


    <div className="delete-modal">


        <h2>Delete Weather Record?</h2>


        <p>
            Are you sure you want to delete this forecast?
            This action cannot be undone.
        </p>



        <div className="modal-buttons">


            <button 
            className="cancel-btn"
            onClick={closeModal}
            >
                Cancel
            </button>



            <button

            className="delete-btn"

            onClick={confirmDelete}

            >
                Delete
            </button>


        </div>


    </div>


</div>

)

}


export default DeleteModal