const router = require('express').Router()
const { User, Maze, Play } = require('../db/models')

module.exports = router

//maze routes:
//get featured mazes
//get single maze
//delete maze
//post a maze
//get all (or highest/lowest) plays for specific maze

router.get('/:id', async (req, res, next) => {
	try {
		const maze = await Maze.findById(req.params.id)
		if (!maze) {
			const error = new Error('Maze not found!')
			error.status = 404
			return next(error)
		}
		res.json(maze)
	} catch (err) {
		next(err)
	}
})

// router.get('/:id/best', async (req, res, next) => {
// 	try {
// 		const sorted = allPlays.sort( (a, b) => a.seconds - b.seconds )
// 		const best = sorted.slice(0, 3)
// 		res.json(best)
// 	} catch (err) {
// 		next(err)
// 	}
// })

// router.get('/featured', async (req, res, next) => {
// 	try {

// 	} catch (err) {
// 		next(err)
// 	}
// })
//

router.delete('/:id', async (req, res, next) => {
	try {
		const mazeToDelete = await Maze.findById(req.params.id)
		await mazeToDelete.destroy()
		res.sendStatus(204)
	} catch (err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {
	try {
		// console.log('Req.body', req.body)
		// const { solveable, image, data } = req.body
		// const maze = await Maze.create({ image, solveable })
		const maze = await Maze.create(req.body)
		// maze.setData(data)
		res.json(maze)
	} catch (err) {
		next(err)
	}
})
