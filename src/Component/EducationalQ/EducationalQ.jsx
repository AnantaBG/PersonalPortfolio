import { Card } from "flowbite-react";


const EducationalQ = () => {
    return (
        <div className="mt-20 lg:w-3/4 mx-auto md:w-10/12 w-full " id="experience">
                    <div className="flex mb-10 flex-col justify-center  mx-auto text-center">
                        <h2 className="sm:text-3xl text-2xl mt-6 text-[#4db5ff]">My Educational Qualification</h2>
                    </div>
                    <div className="grid  mt-5 lg:grid-cols-2 gap-3 lg:gap-1 mb-5">
                        <div>
                        <Card className="bg-transparent backdrop-blur-3xl border-transparent shadow-md shadow-blue-400 hover:backdrop-brightness-75 min-h-72 ">
                            <h1 className="text-4xl mb-5">Intermediate</h1>
                            <div className="">

                    <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                        <th className="border px-4 py-2">Exam</th>
                        <th className="border px-4 py-2">Academic Year</th>
                        <th className="border px-4 py-2">Subject</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono">
                        <tr className="border-b">
                        <td className="border px-4 py-2">HSC</td>
                        <td className="border px-4 py-2">2019 - 2021</td>
                        <td className="border px-4 py-2">Science</td>
                        </tr>
                    </tbody>
                    </table>
                            
                            
                            </div>
                        </Card>
                        </div>
                        <div>
                        <Card className="bg-transparent backdrop-blur-3xl border-transparent shadow-md shadow-blue-400 hover:backdrop-brightness-75 min-h-72  ">
                        <h1 className="text-4xl mb-5">Bachelor/Hon&apos;s</h1>
                        <div className="">
                        <table className="min-w-full border-collapse">
                    <thead>
                        <tr>
                        <th className="border px-4 py-2">Exam</th>
                        <th className="border px-4 py-2">Academic Year</th>
                        <th className="border px-4 py-2">Subject</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono">
                        <tr className="border-b">
                        <td className="border px-4 py-2">BSC Hon&apos;s</td>
                        <td className="border px-4 py-2">2023 - present</td>
                        <td className="border px-4 py-2">Computer Science</td>
                        </tr>
                    </tbody>
                    </table>
                        
                        </div>
                        </Card>
                        </div>
                    </div>
                </div>
    );
};

export default EducationalQ;