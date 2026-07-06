export default function Hero() {
    return <div className="carousel w-full rounded-box">
        <div className="carousel-item w-full relative">
            <img
                src="https://ucarecdn.com/521746bf-be02-4f5b-88ce-eb17479ae4a5/image.png"
                alt="Museum"
                className="w-full h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center">
                <div className="px-6 max-w-xl font-news font-bold text-base-100 md:text-2xl lg:text-6xl italic mb-6">
                    <h1>Welcome to Our Fusion Museum</h1>

                    <p className="text-lg text-primary-content font-semibold">Discover the perfect blend of art and technology in our immersive exhibits.</p>

                    <button className="btn btn-secondary btn-lg">Explore Exhibits</button>
                </div>
            </div>
        </div>
    </div>

}