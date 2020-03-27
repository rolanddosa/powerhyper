import * as React from "react";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export class Timeline extends React.Component {
    render() {
        return (
            <VerticalTimeline bodyAttributes={{style: 'background-color : #FFF'}}>
                <style>{'body { background-color: #89dfff; }'}</style>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2019"
                    iconStyle={{background: 'rgb(186, 255, 59)', color: '#d51111 '}}
                    //icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Nitrogen Oxide concentration <a
                        href="https://www.theguardian.com/environment/2020/mar/01/dramatic-fall-in-china-pollution-levels-partly-related-to-coronavirus"
                        target="_blank">decrease</a> during Corona virus</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="June 2019"
                    iconStyle={{background: 'rgb(186, 255, 59)', color: '#d51111 '}}
                    //icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Australian fires early signs</h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="4th November 2016"
                    iconStyle={{background: 'rgb(186, 255, 59)', color: '#fff'}}
                    //icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Paris Agreement becomes effective</h3>
                    <p className="vertical-timeline-element-subtitle">The agreement within the United Nations
                        Framework Convention on Climate Change, dealing with greenhouse-gas-emissions mitigation and
                        adaptation</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="1880s"
                    iconStyle={{background: 'rgb(186, 255, 59)', color: '#fff'}}
                    // icon={CoalMiningIcon()}
                >
                    <h3 className="vertical-timeline-element-title">Coal Mining Growing</h3>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }
}