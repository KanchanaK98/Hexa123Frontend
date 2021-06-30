import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <hr />
                    <table className="icons">
                        <tbody><tr>
                            <td><img src="playstore.png" alt="playstore" width="200px" height="120px" />
                            </td>
                            <td><img src="appstore.png" alt="appstore" width="200px" height="120px" /></td>
                        </tr>
                            <tr>
                                <td colSpan={2}>
                                    <div class="social-icons">
                                        <p>
                                            <i class="fab fa-facebook"></i>
                                        </p>
                                        <p>
                                            <i class="fab fa-twitter"></i>
                                        </p>
                                        <p>
                                            <i class="fab fa-instagram"></i>
                                        </p>
                                        <p>
                                            <i class="fab fa-linkedin-in"></i>
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody></table>
                    <table className="nav">
                        <tbody><tr>
                            <td rowSpan={2} colSpan={4}>
                                <img style={{ borderRadius: '50%' }} src="logo.png" alt="logo" width="200px" height="100px" />
                            </td>
                        </tr>

                            <tr>


                                <td rowSpan={2} colSpan={4}>No:102, Olcut Road, Colombo 02.</td>
                            </tr>
                        </tbody></table>
                    <p>©2021 Hexa123 Inc.</p>
                </footer>
            </div>
        )
    }
}
