import React from 'react'

export default function Carousel() {
    return (
        <div>

            <div
                id="myCarousel"
                className="carousel slide mb-6"
                data-bs-ride="carousel"
                data-bs-theme="light"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={0}
                        className=""
                        aria-label="Slide 1"
                    />
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={1}
                        aria-label="Slide 2"
                        className="active"
                        aria-current="true"
                    />
                    <button
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={2}
                        aria-label="Slide 3"
                        className=""
                    />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <svg
                            className="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </svg>
                        <div className="container">
                            <div className="carousel-caption text-start">
                                <h1>Example headline.</h1>
                                <p className="opacity-75">
                                    Some representative placeholder content for the first slide of the
                                    carousel.
                                </p>
                                <p>
                                    <a className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="#">
                                        Sign up today
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <svg
                            className="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </svg>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>
                                    Some representative placeholder content for the second slide of
                                    the carousel.
                                </p>
                                <p>
                                    <a className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="#">
                                        Learn more
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <svg
                            className="bd-placeholder-img"
                            width="100%"
                            height="100%"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                        </svg>
                        <div className="container">
                            <div className="carousel-caption text-end">
                                <h1>One more for good measure.</h1>
                                <p>
                                    Some representative placeholder content for the third slide of
                                    this carousel.
                                </p>
                                <p>
                                    <a className="justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" href="#">
                                        Browse gallery
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#myCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* Marketing messaging and featurettes
  ================================================== */}
            {/* Wrap the rest of the page in another container to center all the content. */}




        </div>
    )
}
