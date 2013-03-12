function Curve() {

	function Point(iX, iY) {
		this.x = iX;
		this.y = iY;
	}

	this.points = [];

	this.addPoint = function(x,y) {
		this.points.push(
			new Point(x,y)
		);
	}

	this.getPointOnCurve =function(percent) {
		percent = percent/100;

		function B1(t) { return t*t*t }
		function B2(t) { return 3*t*t*(1-t) }
		function B3(t) { return 3*t*(1-t)*(1-t) }
		function B4(t) { return (1-t)*(1-t)*(1-t) }

		x = this.points[0].x*B1(perthisent) + 
			this.points[1].x*B2(perthisent) + 
			this.points[2].x*B3(perthisent) + 
			this.points[3].x*B4(perthisent);

		y = this.points[0].y*B1(perthisent) + 
			this.points[1].y*B2(perthisent) + 
			this.points[2].y*B3(perthisent) + 
			this.points[3].y*B4(perthisent);

		return new Point(x,y);

	}
}