import Button from "../components/Button"
const Subscribe = () => {
    return (
        <section
            id="contact-us"
            className="max-container flex justify-between first-letter:items-center
        max-lg:flex-col gap-10">
            <h3 className="text-4xl text-center  leading-[68px] lg:max-w-md fontpalanquin
            font-bold">
                Sign Up for <span
                className="text-sky-600 ">Updates</span> & Newsletter
            </h3>
            <div className="lg:max-w-[40%] w-full items-center
            max-sm:flex-col gap-5 p-2.5 rounded-full sm:border-slate-gray">
                <input type="email" name="email" id="contact-us"
                    placeholder="email@company.com"
                    className="py-3 px-2  w-full rounded-full
                    border border-sky-600   " />
                <div className="max-sm:justify-end  flex mt-6 items-center max-sm:w-full">
                <Button  label='Sign Up' fullwidth />
                </div>      
</div>

        </section>
    )
}
export default Subscribe