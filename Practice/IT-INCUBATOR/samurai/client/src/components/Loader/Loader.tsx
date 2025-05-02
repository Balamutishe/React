import c from "./Loader.module.css";

export const Loader = () => (
	<div className={ c.loaderContainer }>
			<div className={ c.loader }>
					<div className={ c.loaderText }>Загрузка</div>
					<div className={ c.loaderCircles }>
							<div className={ c.circle }></div>
							<div className={ c.circle }></div>
							<div className={ c.circle }></div>
					</div>
			</div>
	</div>

);