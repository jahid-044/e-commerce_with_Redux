

export default function Confirmation() {

    return (
        <div className=" flex flex-col justify-center mt-32">
            <h1 className="text-7xl font-medium text-center">Thank you.</h1>
            <h1 className="text-4xl text-center">Your order was completed successfully.</h1>
            <h1 className="text-2xl text-center mt-12 px-12 sm:px-52 ">
                An email receipt including the details about your order has been sent to the email address provided.
                Please keep it for your records.
            </h1>
        </div>
    )

}