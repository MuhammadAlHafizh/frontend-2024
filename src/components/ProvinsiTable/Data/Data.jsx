function Data(props) {
    const {objData, index} = props
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{objData.kota}</td>
            <td>{objData.kasus}</td>
            <td>{objData.sembuh}</td>
            <td>{objData.meninggal}</td>
            <td>{objData.dirawat}</td>
        </tr>
    );
}

export default Data;
