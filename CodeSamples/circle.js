function create(radius) {
	if (radius < 0)
		throw Error('Radius cannot be less than zero');

	return { radius: radius }
}

function area(circle) {
	return Math.pow(Math.PI * circle.radius, 2);
}

exports.create = create;
exports.area = area;