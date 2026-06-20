import "../Components_style/EditForm.css"


function EditForm({

    editingRecord,

    editLocation,
    setEditLocation,

    editStart,
    setEditStart,

    editEnd,
    setEditEnd,

    updateRecord,
    cancelEdit

}) {


if(!editingRecord){

    return null

}



return (


<div className="edit-overlay">


    <div className="edit-modal">


        <h2>Edit Weather Search</h2>



        <div className="edit-field">


            <label>
                Location
            </label>


            <input

            value={editLocation}

            onChange={(e)=>setEditLocation(e.target.value)}

            />


        </div>





        <div className="edit-field">


            <label>
                Start date
            </label>


            <input

            type="date"

            value={editStart}

            onChange={(e)=>setEditStart(e.target.value)}

            />


        </div>






        <div className="edit-field">


            <label>
                End date
            </label>


            <input

            type="date"

            value={editEnd}

            onChange={(e)=>setEditEnd(e.target.value)}

            />


        </div>





        <div className="edit-buttons">


            <button

            className="save-btn"

            onClick={updateRecord}

            >

                Save changes

            </button>




            <button

            className="cancel-btn"

            onClick={cancelEdit}

            >

                Cancel

            </button>



        </div>



    </div>


</div>


)


}


export default EditForm