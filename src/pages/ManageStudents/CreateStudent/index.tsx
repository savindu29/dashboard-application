
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import React, { PureComponent } from 'react';

interface title {
    displayName: string;
}


const CreateStudent = ({ displayName }: title) => {
    return (
        <div className={"py-12 px-20"}>
            <div>
                <h1>Add Student</h1>
            </div>
        <form action="#" method="POST" className="mx-auto mt-6 ">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="full-name" className="block text-sm  leading-6 text-gray-900">
                        Full Name
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="full-name"
                            id="full-name"
                            autoComplete="given-name"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="mobile-number" className="block text-sm  leading-6 text-gray-900">
                        Mobile Number
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="tel"
                            name="mobile-number"
                            id="mobile-number"
                            autoComplete="family-name"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>










                <div>
                    <label htmlFor="gender" className="block text-sm  leading-6 text-gray-900">
                        Gender
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="text"
                            name="gender"
                            id="gender"
                            autoComplete="family-name"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="birthday" className="block text-sm  leading-6 text-gray-900">
                       Birthday
                    </label>
                    <div className="mt-2.5">
                        <input
                            type="date"
                            name="birthday"
                            id="birthday"
                            autoComplete="family-name"
                            className=" w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>



                <div>
                    <label htmlFor="department" className="block text-sm  leading-6 text-gray-900">
                       Department
                    </label>
                    <div className="mt-2.5">

                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-sm  leading-6 text-gray-900">
                        Address
                    </label>
                    <div className="relative mt-2.5">

                        <input
                            type="tel"
                            name="address"
                            id="address"
                            autoComplete="tel"
                            className="block w-full rounded-md  px-3.5 py-2 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>


            </div>
            <div className="mt-10">
                <button
                    type="submit"
                    className="block rounded-md bg-sky-400 px-3.5 py-2.5 text-center text-sm  text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Add Student
                </button>
            </div>
        </form>
        </div>
    )
}
export default CreateStudent;
