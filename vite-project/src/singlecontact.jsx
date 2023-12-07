

function SingleContact({contacts}) {

    return (
        <div className="SelectedContactInfo">
        <h2 >{contacts ? contacts.name + "" : null}</h2>
        <ul>
            <li> PHONE: {contacts ? contacts.phone + "": null}</li>
            <li> EMAIL: {contacts ? contacts.email + "": null}</li>
            <li> ADDRESS: {contacts ? contacts.address.street + "": null}</li>
            <li> CITY: {contacts ? contacts.address.city + "": null}</li>
        </ul>
        </div>
    )
}

export default SingleContact 
