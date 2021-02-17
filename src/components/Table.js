import React from 'react'

function Table() {
    return (
        <div className="row-data  mt-5">
            <table id="example" className="table table-striped table-bordered table-responsives " style={{width:"100%"}}>
                <thead>
                    <tr>
                        <th>IP</th>
                        <th>Adversary ID</th>
                        <th>Active since</th>
                        <th># Events</th>
                        <th>Origin</th>
                        <th>Target</th>
                        <th>Latest Attack</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>14 days</td>
                        <td>23</td>
                        <td>Italy</td>
                        <td>FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>
                    </tr>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>5 days</td>
                        <td>24</td>
                        <td>USA</td>
                        <td>FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>
                    </tr>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>14 days</td>
                        <td>1</td>
                        <td>Russia</td>
                        <td>  FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>

                    </tr>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>189 days</td>
                        <td>17</td>
                        <td>Italy</td>
                        <td>  FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>

                    </tr>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>14 days</td>
                        <td>245</td>
                        <td>Italy</td>
                        <td>  FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>

                    </tr>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>14 days</td>
                        <td>64</td>
                        <td>Italy</td>
                        <td>  FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>

                    </tr>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>14 days</td>
                        <td>46</td>
                        <td>Italy</td>
                        <td>  FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>

                    </tr>
                    <tr>
                        <td>1.24.24.13</td>
                        <td>234567898765</td>
                        <td>14 days</td>
                        <td>12</td>
                        <td>Italy</td>
                        <td>  FTP</td>
                        <td>11 Jan 21 | 22:23:12</td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
