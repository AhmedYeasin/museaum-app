import { useLoaderData } from "react-router"
import { getUnwantedIdeasID, getWantedIdeasID } from "../localstorage.js"
import { BoxIcon, Heart, ThumbsDown } from "lucide-react"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"


export default function Dashboard() {

    const products = useLoaderData()

    const wantedIds = getWantedIdeasID()
    const unwantedIds = getUnwantedIdeasID()

    const wantedCount = wantedIds.length;
    const unwantedCount = unwantedIds.length;

    const barData = [...products].sort((a, b) => b.views - a.views).slice(0, 7).map(p => ({ name: p.name, views: p.views }))

    return (
        <div className="px-6 my-10 space-y-8">
            <h1 className="italic font-news text-3xl bg-white p-4 font-bold">Dashboard</h1>
            <div className="flex gap-8">
                <div className="stat rounded-box border shadow-xl">
                    <div className="stat-figure">
                        <Heart />
                    </div>
                    <div className="stat-title">Wanted Items</div>
                    <p className="stat-value">{wantedCount}</p>
                </div>
                <div className="stat rounded-box border shadow-xl">
                    <div className="stat-figure">
                        <ThumbsDown />
                    </div>
                    <div className="stat-title">Unwanted Items</div>
                    <div className="stat-value">{wantedCount}</div>
                </div>
                <div className="stat rounded-box border shadow-xl">
                    <div className="stat-figure">
                        <BoxIcon />
                    </div>
                    <div className="stat-title">Total Items</div>
                    <div className="stat-value">{products.length}</div>
                </div>
            </div>

            <div className="pt-4">
                <h2 className="font-news font-semibold italic text-xl p-4">Products Overview:</h2>

                <ResponsiveContainer height={300}>
                    <BarChart data={barData}>
                        <XAxis dataKey={"name"} />
                        <YAxis tick={{ fontSize: 12 }}
                        tickFormatter={(v)=> new Intl.NumberFormat("en-us", {notation: "compact"}).format(v)} />
                        <Bar dataKey={"views"} fill="maroon"
                            radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}