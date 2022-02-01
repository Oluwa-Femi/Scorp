const findById = async (id, model) =>
	await db(model)
		.where({ id })
		.first();

const getById = async (id) => await findById(id, "post");

module.exports = { getById };