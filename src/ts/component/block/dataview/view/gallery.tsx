import * as React from 'react';
import { Icon } from 'ts/component';
import { I } from 'ts/lib';

interface Props extends I.BlockDataview {};

class ViewGallery extends React.Component<Props, {}> {

	render () {
		const { header, content } = this.props;
		const { data, properties } = content;
		
		return (
			<div className="view viewGallery">
			</div>
		);
	};
	
};

export default ViewGallery;