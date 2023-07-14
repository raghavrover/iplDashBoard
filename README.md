In this project, I've built an **IPL Dashboard App** by using React Router.

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-output-v2.gif" alt="ipl-dashboard-output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files on Different Devices

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-sm-output.png)
- [Extra Small (Size < 576px) and Small (Size >= 576px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Home](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-home-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Team Matches](https://assets.ccbp.in/frontend/content/react-js/ipl-dashboard-team-matches-lg-output-v2.png)

</details>

### Completion Instructions

<details>
<summary>Functionalities added</summary>
<br/>

The app has the following functionalities

- When the app is opened, Home Route will be displayed
- While fetching data **Loader** is displayed
- When the Home Route is opened,
  - A HTTP GET request is made to the **teamsApiUrl**
  - After fetching the data, the list of teams will be displayed
- When a team card in Home Route is clicked,
  - Page will be navigated to the Team Matches Route with the URL `/team-matches/:id`
- When the Team Matches Route is opened,
  - A HTTP GET request is made to the **teamMatchesApiUrl** with the team id to get the recent matches data of the team
    - Example: `https://apis.ccbp.in/ipl/KKR`
  - After fetching the data, the team banner, latest match, and list of recent matches will be displayed

</details>

<details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png)
- [https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png](https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png)
- [https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png](https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png) alt should be **ipl logo**

</details>

<details>
<summary>Colors</summary>

<br/>

**Background Colors**:

<div style="background-color: #1e293b; width: 150px; padding: 10px; color: white">Hex: #1e293b</div>
<div style="background-color: #a4261d; width: 150px; padding: 10px; color: white">Hex: #a4261d</div>
<div style="background-color: #5755a7; width: 150px; padding: 10px; color: white">Hex: #5755a7</div>
<div style="background-color: #d91c1f; width: 150px; padding: 10px; color: white">Hex: #d91c1f</div>
<div style="background-color: #f7db00; width: 150px; padding: 10px; color: white">Hex: #f7db00</div>
<div style="background-color: #ffffff33; width: 150px; padding: 10px; color: black">Hex: #ffffff33</div>
<div style="background-color: #da237b; width: 150px; padding: 10px; color: white">Hex: #da237b</div>
<div style="background-color: #13418b; width: 150px; padding: 10px; color: white">Hex: #13418b</div>
<div style="background-color: #f26d22; width: 150px; padding: 10px; color: white">Hex: #f26d22</div>
<div style="background-color: #4f5db0; width: 150px; padding: 10px; color: white">Hex: #4f5db0</div>
<div style="background-color: #0f172a; width: 150px; padding: 10px; color: white">Hex: #0f172a</div>
<br/>

**Border Colors**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #475569; width: 150px; padding: 10px; color: black">Hex: #475569</div>

<br />

**Text Colors**

<div style="background-color: #ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color: #18ed66; width: 150px; padding: 10px; color: black">Hex: #18ed66</div>
<div style="background-color: #e31a1a; width: 150px; padding: 10px; color: black">Hex: #e31a1a</div>

</details>

<details>
<summary>Font-families</summary>

- Bree Serif

</details>
