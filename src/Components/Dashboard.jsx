import { useLoaderData } from "react-router"
import { getUnwantedIdeasID, getWantedIdeasID } from "../localstorage.js"
import { BoxIcon, Heart, ThumbsDown } from "lucide-react"
import { Bar, BarChart, PieChart, Legend, Tooltip, ResponsiveContainer, XAxis, YAxis, Pie } from "recharts"


export default function Dashboard() {

    const products = useLoaderData()

    const wantedIds = getWantedIdeasID()
    const unwantedIds = getUnwantedIdeasID()

    const wantedCount = wantedIds.length;
    const unwantedCount = unwantedIds.length;

    const barData = [...products].sort((a, b) => b.views - a.views).slice(0, 7).map(p => ({ name: p.name, views: p.views }))

    const pieData = [
        {
            name: "Wanted",
            value: wantedCount,
            fill: "blue",
        },
        {
            name: "Unwanted",
            value: unwantedCount,
            fill: "red",
        },
        {
            name: "Total",
            value: products.length,
            fill: "green",
        },
    ]

    return (
        <div className="px-6 my-10 space-y-8">
            <h1 className="italic font-news text-3xl bg-white p-4 font-bold">Dashboard</h1>
            <div className="flex gap-8">
                <div className="stat rounded-box border shadow-xl">
                    <div className="stat-figure text-blue-700 hover:fill-blue">
                        <Heart/>
                    </div>
                    <div className="stat-title">Wanted Items</div>
                    <p className="stat-value">{wantedCount}</p>
                </div>
                <div className="stat rounded-box border shadow-xl">
                    <div className="stat-figure">
                        <ThumbsDown fill="red" />
                    </div>
                    <div className="stat-title">Unwanted Items</div>
                    <div className="stat-value">{unwantedCount}</div>
                </div>
                <div className="stat rounded-box border shadow-xl">
                    <div className="stat-figure text-green-700">
                        <BoxIcon fill={"green"}/>
                    </div>
                    <div className="stat-title">Total Items</div>
                    <div className="stat-value">{products.length}</div>
                </div>
            </div>

            {/* Bar chart data */}

            <div className="pt-4 border-b">
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
            
            {/* Pie Chart Data */}
            <div className="pt-4">
                <h2 className="font-news font-semibold italic text-xl p-4 text-center">Choose Overview</h2>

                <ResponsiveContainer height={300}>
                    <PieChart data={barData}>
                        <Pie data={pieData}></Pie>
                        <Tooltip/>
                        <Legend/>
                    </PieChart>
                </ResponsiveContainer>
                <p className="text-center p-2"><span className="bg-white p-1.5 text-xs text-shadow"> This Pie shows collective data of which I like to get or not of total products.</span></p>
            </div>
        </div>
    )
}