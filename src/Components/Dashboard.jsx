import { useLoaderData } from "react-router"
import { getUnwantedIdeasID, getWantedIdeasID } from "../localstorage.js"
import { BoxIcon, Heart, ThumbsDown } from "lucide-react"

export default function Dashboard(){
    
    const products = useLoaderData()

    const wantedIds = getWantedIdeasID()
    const unwantedIds = getUnwantedIdeasID()

    const wantedCount = wantedIds.length;
    const unwantedCount = unwantedIds.length;


    return (
        <div className= "px-6 my-10 space-y-8">
            <h1 className="italic font-news text-3xl bg-white p-4 font-bold">Dashboard</h1>
        <div className="flex gap-8">
            <div className="stat rounded-box">
                <div className="stat-figure">
                    <Heart/>
                </div>
                <div className="stat-title">Wanted Items</div>
                <div className="stat-value">{wantedCount}</div>
            </div>
            <div className="stat rounded-box">
                <div className="stat-figure">
                    <ThumbsDown/>
                </div>
                <div className="stat-title">Unwanted Items</div>
                <div className="stat-value">{wantedCount}</div>
            </div>
            <div className="stat rounded-box">
                <div className="stat-figure">
                    <BoxIcon/>
                </div>
                <div className="stat-title">Total Items</div>
                <div className="stat-value">{products.length}</div>
            </div>
        </div>
        </div>
    )
}