const BoilerplateDetails = ({ boilerplate }) => {
    return (
        <div className="boilerplate-details">
            <h4>{boilerplate.title}</h4>
            <p>
                <strong>Number: </strong>
                {boilerplate.number}
            </p>
            <p>
                <strong>Author: </strong>
                {boilerplate.author}
            </p>
            <p>
                <strong>Created at: </strong>
                {boilerplate.createdAt}
            </p>
        </div>
    );
};

export default BoilerplateDetails;
