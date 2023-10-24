import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[url(/ocean.jpeg)] bg-center">
      <div className="h-screen w-full bg-black opacity-50">

      </div>
      <div className="absolute h-screen w-full flex items-center justify-center font-serif">
        <div className="max-w-xl mx-auto text-white p-6 rounded">
            <h1 className="text-3xl font-semibold mb-4">Shelby Vasas</h1>
            <p className="text-gray-400 mb-1">/ˈʃɛlbi vəˈsas/</p>
            <p className="font-bold mb-2">noun</p>
            <ol className="list-decimal pl-5 mb-4">
                <li className="mb-2">
                    A passionate full-stack developer known for designing transformative digital experiences.
                    <blockquote className="text-gray-400 italic mt-2">
                        Shelby Vasas excels in creating user-centric applications.
                    </blockquote>
                </li>
                <li>
                    An individual proficient in programming languages including Java, C#, Python, JavaScript, and TypeScript.
                    <blockquote className="text-gray-400 italic mt-2">
                        With Shelby Vasas on the team, we can cover a broad spectrum of software development tasks.
                    </blockquote>
                </li>
            </ol>
        </div>

      </div>
    </main>
  );
}
