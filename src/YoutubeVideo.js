var React = require('react');

var YoutubeVideo = React.createClass({

	getVideoUrl (url) {
		var videoid = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
		if(videoid != null) {
   		return(videoid[1]);
		} else {
    	return(false);
		}
	},

	render () {
		return (<div>
							<iframe width={this.props.width} height={this.props.height}
								src={`https://www.youtube.com/embed/${this.getVideoUrl(this.props.url)}?
									rel=${this.props.rel}&amp;
									showinfo=${this.props.showinfo}&amp;
									start=${this.props.start}&amp;
									fc=${this.props.fs}&amp;
									autoplay=${this.props.autoplay}&amp;
									color=${this.props.color}&amp;
									controls=${this.props.controls}&amp;
									disablekb=${this.props.disablekb}&amp;
									iv_load_policy=${this.props.iv_load_policy}&amp;
									loop=${this.props.loop}&amp;
									modestbranding=${this.props.modestbranding}&amp;
									playsinline=${this.props.playsinline}&amp;

								`}
									frameBorder={this.props.border}></iframe>
						</div>
					);
			}
});

YoutubeVideo.defaultProps = {
	url: 'https://www.youtube.com/watch?v=PPqd4r7iHWg',
	border: 0,
	fs: 0,
	rel: 0,
	showinfo: 0,
	start: 0,
	autoplay: 0,
	color: 'red',
	controls: 1,
	disablekb: 0,
	iv_load_policy: 1,
	loop: 0,
	modestbranding: 0,
	playsinline: 0,
	width: 580,
	height: 315
};

export default YoutubeVideo;
