import React from 'react';
import './about.css';


class About extends React.Component {
    render() {
        return (
            <div className='about-container'>
                <h2>About Indian Culture</h2>
                <table className='culture-table'>
                    <thead>
                        <tr>
                            <th>Aspect</th>
                            <th>Description</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Art</td>
                            <td>Rich history of paintings, sculptures, and performing arts.</td>
                            <td><img src="https://i.pinimg.com/originals/ea/ec/71/eaec71669324e177ac15a8e253ec8b99.jpg" alt="Art" /></td>
                        </tr>
                        <tr>
                            <td>Religion</td>
                            <td>Diverse religious practices including Hinduism, Islam, Christianity, Sikhism, etc.</td>
                            <td><img src="https://www.holidify.com/blog/wp-content/uploads/2015/07/13896645072_c994520879_k.jpg" alt="Religion" /></td>
                        </tr>
                        <tr>
                            <td>Festivals</td>
                            <td>Celebration of various festivals like Diwali, Holi, Eid, Christmas, and more.</td>
                            <td><img src="https://th.bing.com/th/id/OIP.eDOsKz_VkYL9gjW7tNl_OQHaEB?w=825&h=449&rs=1&pid=ImgDetMainhttps://www.taleof2backpackers.com/wp-content/uploads/2020/03/Famous-Festivals-of-India-1.jpg" alt="Festivals" /></td>
                        </tr>
                        <tr>
                            <td>Cuisine</td>
                            <td>Varied and flavorful dishes representing different regions and cultures.</td>
                            <td><img src="https://th.bing.com/th/id/OIP.1vYAf4I149tM4nIyoEfCwgHaE8?rs=1&pid=ImgDetMain" alt="Cuisine" /></td>
                        </tr>
                        <tr>
                            <td>Clothing</td>
                            <td>Diverse traditional clothing styles reflecting cultural and regional diversity.</td>
                            <td><img src="https://www.caleidoscope.in/wp-content/uploads/2020/10/Traditional-Indian-Clothing.jpg" alt="Clothing" /></td>
                        </tr>
                        {/* Add more rows for different aspects of Indian culture with respective image URLs */}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default About;
