/* eslint-disable import/no-anonymous-default-export */
import { moviesApi, tvApi } from 'api';
import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component{
	constructor(props) {
		super(props);
		const { locaion: { pathname } } = props
		this.state = {
			result: null,
			error: null,
			loading: true,
			isMovie: pathname.includes("/movie/")
		};
	}

	async componentDidMount() {
		const {
			match: {
				params: { id }
		 },
		 history: { push }
		} = this.props;
		//console.log(this.props);
		const { isMovie } = this.state;
		const parsedId = parseInt(id);

		if(isNaN(parsedId)){
			return push("/")
		}
		let result = null;
		try{
			if(isMovie){
				({ data: result } = await moviesApi.movieDetail(parsedId));
			} else {
				({ data: result } = await tvApi.showDetail(parsedId));
			}
			console.log(result);
		} catch{
			this.setState({error: "Can't find anything."})
		} finally{
			this.setState({loading: false, result})
		}
	}

	// eslint-disable-next-line react/require-render-return
	render() {
		console.log(this.props);
		const { result, error, loading } = this.state;
		console.log(this.state);
		<DetailPresenter
			result={result}
			error={error}
			loading={loading}
		/>
	}
}