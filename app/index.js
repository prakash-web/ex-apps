var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');


var HelloWorld = React.createClass({
	render: function () {
		return (
		<div> {this.props.name} start reactING before you complete {this.props.age}</div>
		)
	}
});
var ProfilePic = React.createClass({
	render: function() {
		return <img src="{this.props.img}" />
	}
});
var Link = React.createClass({
	changeURL: function(){
		window.location.replace(this.props.href)
	},
	render: function(){
		return (
			<p style={{color: 'blue', cursor:'pointer'}}
			onClick={this.changeURL}>
			{this.props.children}
			</p>
		)
	}
});
var ProfileLink = React.createClass({
 render: function() {
	 return (
		 <div>
			<Link href={'http://www.github.com/' + this.props.user}>
			{this.props.user}
			</Link>
		</div>
 )
 }
});
var ProfileName= React.createClass({
	render: function() {
		return <h2> {this.props.name} </h2>
	}
});
var Profile= React.createClass({
	render: function() {
		return (
			<div>
				<ProfilePic img="http://www.planwallpaper.com/static/images/hd-beach-wallpapers-1080p-10.jpg" />
				<ProfileName name="Bhanu Prakash" />
				<ProfileLink user="prakash-web" />
			</div>
		)
	}
});

ReactDOM.render(
	routes,
	document.getElementById('app')
);
