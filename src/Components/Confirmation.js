
export default function Confirmation() {

    return (
        <div className=" flex flex-col justify-center mt-32">
            <h1 className="text-7xl font-medium text-center">Thank you.</h1>
            <h1 className="text-4xl text-center">Your order was completed successfully.</h1>
            <h1 className="text-2xl mt-12 ml-12 px-4 sm:px-12 md:px-24 flex">
            <div><i className=" fa fa-envelope fa-3x" /></div>
            <div className="pl-4">
                An email receipt including the details about your order has been sent to the email address provided.
                Please keep it for your records.
                </div>
            </h1>
        </div>
    )

}