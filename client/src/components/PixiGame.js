// import * as PIXI from 'pixi.js'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PixiApp from '../utilities/GameLogic'
// import { getMazeFromImage } from '../utilities/imageAnalysis'
import { loadMaze } from '../store/maze'

class PixiGame extends Component {
	// constructor() {
	// 	super()
	// 	this.state = {
	// 		imageHeight: 0,
	// 		imageWidth: 0
	// 	}
	// }

	componentDidMount() {
		this.props.loadMaze(this.props.maze.id)
		// const image = this.refs.mazeImage

		// image.crossOrigin = 'Anonymous'
		// image.onload = () => {
		// 	console.log(
		// 		'image in PixiGame, naturalHeight & naturalWidth',
		// 		image.naturalHeight,
		// 		image.naturalWidth
		// 	)

		// 	this.setState({
		// 		imageHeight: image.naturalHeight,
		// 		imageWidth: image.naturalWidth
		// 	})
		// const tileSize = 50
		// const tileSize = Math.floor(image.naturalWidth / 100)
		// const mazeGrid = getMazeFromImage(
		// 	this.refs.mazeImageCanvas,
		// 	image,
		// 	tileSize
		// )
		// console.log(
		// 	'mazeGrid dimensions (height, width)',
		// 	mazeGrid.length,
		// 	mazeGrid[0].length
		// )
		// console.log('mazeGrid:', mazeGrid)
		// console.log('Maze in Pixi', this.props.maze.data)
		// if (this.props.maze.data) {
		// 	console.log('Maze in Pixi', this.props.maze.data)
		// 	this.refs.board.appendChild(
		// 		PixiApp(this.props.image, this.props.maze.data, tileSize).view
		// 	)
		// }
		// this.refs.board.appendChild(
		// 	PixiApp(this.props.image, this.props.maze.data, tileSize).view
		// )
		// }
	}

	render() {
		const { maze, image } = this.props
		const tileSize = 50
		if (maze.data) {
			console.log('Maze in Pixi', this.props.maze.data)
			this.refs.board.appendChild(PixiApp(image, maze.data, tileSize).view)
		}
		// const invisibleImage = { display: 'none' }
		// const invisibleCanvas = { opacity: 0 }
		// console.log(
		// 	'imageHeight, imageWidth',
		// 	this.state.imageHeight,
		// 	this.state.imageWidth
		// )
		return (
			<div>
				<div ref="board" />
				{/* <img
					id="mazeImage"
					ref="mazeImage"
					src={image}
					alt="simpleMaze"
					style={invisibleImage}
				/>
				<canvas
					id="mazeImageCanvas"
					ref="mazeImageCanvas"
					style={invisibleCanvas}
					width={this.state.imageWidth} // "4032" //{imageWidth} //"4032" //"2500" //"4032" //"600" //update with image width
					height={this.state.imageHeight} // "3024" // {imageHeight} //"3024" //"1875" // "3024" //"800" //update with image height
					//style={{ border: '1px solid #000000' }}
				/> */}
			</div>
		)
	}
}

const mapState = state => {
	return {
		image: state.image,
		maze: state.maze
	}
}

const mapDispatch = dispatch => {
	return {
		loadMaze: id => dispatch(loadMaze(id))
	}
}

export default connect(
	mapState,
	mapDispatch
)(PixiGame)
