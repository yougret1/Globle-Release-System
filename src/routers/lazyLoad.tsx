import Loading from "@/components/Loading";
import React, { Suspense } from "react";

const lazyLoad = (Comp: React.LazyExoticComponent<any>): React.ReactNode => {
	return (
		<Suspense fallback={<Loading />}>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
