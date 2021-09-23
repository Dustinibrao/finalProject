function App() {
	return (
		<div className="grid-container">
			<header className="row">
				<div>
					<a className="brand" href="index.html">
						Lolas Snack Shack
					</a>
				</div>
				<div>
					<a href="cart.html">Cart</a>
					<a href="signIn.html">Sign In</a>
				</div>
			</header>
			<main>
				<div className="row center">
					<div className="card">
						<a href="producthtml">
							<img
								className="medium"
								src="./images/beefliver.png"
								alt="product"
							/>
						</a>
						<div className="card-body">
							<a href="product.html">
								<h2>Dried Beef Liver</h2>
							</a>
							<div className="rating">
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
							</div>
							<div className="price">$20</div>
						</div>
					</div>
					<div className="card">
						<a href="producthtml">
							<img
								className="medium"
								src="./images/beefliver.png"
								alt="product"
							/>
						</a>
						<div className="card-body">
							<a href="product.html">
								<h2>Dried Beef Liver</h2>
							</a>
							<div className="rating">
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
							</div>
							<div className="price">$20</div>
						</div>
					</div>
					<div className="card">
						<a href="producthtml">
							<img
								className="medium"
								src="./images/beefliver.png"
								alt="product"
							/>
						</a>
						<div className="card-body">
							<a href="product.html">
								<h2>Dried Beef Liver</h2>
							</a>
							<div className="rating">
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
								<span>
									<i className="fa fa-star"></i>
								</span>
							</div>
							<div className="price">$20</div>
						</div>
					</div>
				</div>
			</main>
			<footer className="row center">All rights reserved</footer>
		</div>
	);
}

export default App;
