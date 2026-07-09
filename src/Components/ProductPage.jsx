

import { Eye, Star } from "lucide-react";
import { useLoaderData } from "react-router";
import { addUnwantedIdea, addWantedIdea, isUnwantedIdea, isWantedIdea } from "../localstorage.js";
import toast from "react-hot-toast";

export default function ProductPage() {
    const p = useLoaderData()

    const handleWantThis = (id) => {
        if (isWantedIdea(id)) {
            toast.error("Already in your wanted list!")
            return;
        }
        if (isUnwantedIdea(id)) {
            toast.error("This product is inunwanted list!")
            return;
        }
        addWantedIdea(id)
        toast.success("Added to your wanted list!", {

        })

    }
    
    const handleDontWantThis = (id) => {
        if (isWantedIdea(id)) {
            toast.error("Already in your wanted list!")
            return;
        }
        if (isUnwantedIdea(id)) {
            toast.error("This product is in unwanted list!")
            return;
        }
        addUnwantedIdea(id)
        toast.success("Added to your unwanted list!", {

        })

    }


    return <main className="px-6 my-10">
        <article className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl bg-base-100 border border-base-300 shadow-sm p-5 md:p-8">
            <figure className="rounded-xl overflow-hidden bg-base-200 h-85 md:h-140">
                <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover object-center"
                />
            </figure>

            <section className="space-y-5">
                <div>
                    <h1 className="font-newsreader text-4xl md:text-6xl font-extrabold italic text-primary mt-2">
                        {p.name}
                    </h1>
                    <p className="mt-3 text-lg text-base-content/80">
                        {p.short_details}
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="rounded-xl bg-base-200 p-4">
                        <p className="text-xs uppercase text-base-content/60">Rating</p>
                        <div className="mt-1 flex items-center gap-2 text-lg font-semibold">
                            <Star />
                            <Star size={18} className="text-warning fill-warning" />
                            <span>{p.rating}</span>
                        </div>
                    </div>

                    <div className="rounded-xl bg-base-200 p-4">
                        <p className="text-xs uppercase text-base-content/60">Views</p>
                        <div className="mt-1 flex items-center gap-2 text-lg font-semibold">
                            <Eye size={18} />
                            <span>
                                {new Intl.NumberFormat("en-US", {
                                    notation: "compact",
                                }).format(p.views)}
                            </span>
                        </div>
                    </div>

                    <div className="rounded-xl bg-base-200 p-4 col-span-2 sm:col-span-1">
                        <p className="text-xs uppercase text-base-content/60">Created</p>
                        <p className="mt-1 text-lg font-semibold">{p.created_date}</p>
                    </div>
                </div>

                <div>
                    <h2 className="font-newsreader text-2xl font-bold text-primary italic">
                        Why It Is Iconic
                    </h2>
                    <p className="mt-2 leading-7 text-base-content/85">
                        {p.long_details}
                    </p>
                </div>
                <p>
                    <span className="font-semibold">Key Feature:</span> {p.key_feature}
                </p>
                <div className="space-x-2">
                    <button
                        to="/"
                        className="btn btn-accent"
                        onClick={() => handleWantThis(p.id)}
                    >
                        I Actually Want This
                    </button>
                    <button
                        to="/"
                        className="btn btn-accent btn-outline"
                    onClick={() => handleDontWantThis(p.id)}
                    >
                        I Don’t Want This
                    </button>
                </div>
                <div className="rounded-xl border border-base-300 bg-base-200/60 p-4 space-y-3">
                    <blockquote className="border-l-4 border-accent pl-4 italic text-base-content/80">
                        {p.quote}
                    </blockquote>
                </div>
            </section>
        </article>
    </main>
}