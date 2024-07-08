import React, { useState } from 'react';
import styled from 'styled-components';
import imageForm from '../../assets/image/image_form_covid.png';

const FormCovidContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xlarge} ${({ theme }) => theme.spacing.xlarge};
  background-color: ${({ theme }) => theme.colors.background};
`;

const FormCovidSection = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: row;
    align-items: center;
  }
`;

const FormCovidLeft = styled.div`
  display: none;
  margin-right: 5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: block;
    flex-basis: 60%;
    padding-right: 5%;
  }
`;

const FormCovidImage = styled.img`
  max-width: 80%;
  height: auto;
  margin-top: ${({ theme }) => theme.spacing.large};
`;

const FormCovidRight = styled.div`
  flex-basis: 40%;
`;

const FormCovidTitle = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: ${({ theme }) => theme.spacing.small};
  font-weight: 500;
`;

const FormCovidGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

const FormCovidLabel = styled.label`
  font-weight: 400;
  margin-bottom: ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.gray};
`;

const FormCovidInput = styled.input`
  outline: none;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const FormCovidSelect = styled.select`
  outline: none;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.white};
`;

const FormCovidButton = styled.button`
  padding: ${({ theme }) => theme.spacing.small} ${({ theme }) => theme.spacing.large};
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  display: block;
  margin-top: ${({ theme }) => theme.spacing.medium};
  width: 100%;
`;

function FormCovid({ objProvinsi, setProvinsi }) {
  const [city, setCity] = useState('');
  const [status, setStatus] = useState('');
  const [total, setTotal] = useState('');

  const changeCityInput = (e) => setCity(e.target.value);
  const changeStatusInput = (e) => setStatus(e.target.value);
  const changeTotalInput = (e) => setTotal(e.target.value);

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (city === '') {
      alert('Kota Harus Di Isi');
      return false;
    } else if (status === '') {
      alert('Status Harus Di Isi');
      return false;
    } else if (total === '') {
      alert('Jumlah Harus Di Isi');
      return false;
    } else {
      const index = objProvinsi.findIndex((data) => data.kota === city);
      const searchCity = objProvinsi.find((data) => data.kota === city);
      let updatedProvinsi = [...objProvinsi];

      if (status === 'dirawat' || status === 'kasus') {
        const newCase = parseInt(searchCity.kasus, 10) + parseInt(total, 10);
        updatedProvinsi[index] = { ...searchCity, kasus: newCase };

        if (status === 'dirawat') {
          const newDirawat = parseInt(searchCity.dirawat, 10) + parseInt(total, 10);
          updatedProvinsi[index] = { ...updatedProvinsi[index], dirawat: newDirawat };
        }
      } else {
        if (status === 'meninggal' || status === 'sembuh') {
          if (parseInt(searchCity.dirawat, 10) < parseInt(total, 10)) {
            alert('Jumlah ' + status + ' harus lebih kecil dari jumlah pasien yang dirawat');
            return false;
          }
        }

        updatedProvinsi[index] = { ...searchCity, [status]: parseInt(searchCity[status], 10) + parseInt(total, 10) };

        if (status === 'meninggal' || status === 'sembuh') {
          const newDirawat = parseInt(searchCity.dirawat, 10) - parseInt(total, 10);
          const newCase = parseInt(searchCity.kasus, 10) - parseInt(total, 10);
          updatedProvinsi[index] = { ...updatedProvinsi[index], dirawat: newDirawat, kasus: newCase };
        }
      }

      alert('Sukses Simpan Data');
      setProvinsi(updatedProvinsi);
    }

    // Reset values
    setCity('');
    setStatus('');
    setTotal('');
  };

  return (
    <FormCovidContainer>
      <FormCovidSection>
        <FormCovidLeft>
          <FormCovidImage src={imageForm} alt="Form Image" />
        </FormCovidLeft>
        <FormCovidRight>
          <FormCovidTitle>Form Covid</FormCovidTitle>
          <form onSubmit={onSubmitForm}>
            <FormCovidGroup>
              <FormCovidLabel>Provinsi</FormCovidLabel>
              <FormCovidSelect id="city" value={city} onChange={changeCityInput}>
                <option value="">Select Provinsi</option>
                {objProvinsi.map((data) => (
                  <option key={data.kota} value={data.kota}>
                    {data.kota}
                  </option>
                ))}
              </FormCovidSelect>
            </FormCovidGroup>
            <FormCovidGroup>
              <FormCovidLabel>Status</FormCovidLabel>
              <FormCovidSelect id="status" name="status" value={status} onChange={changeStatusInput}>
                <option value="">Pilih Status</option>
                <option value="kasus">Positif</option>
                <option value="sembuh">Sembuh</option>
                <option value="meninggal">Meninggal</option>
                <option value="dirawat">Dirawat</option>
              </FormCovidSelect>
            </FormCovidGroup>
            <FormCovidGroup>
              <FormCovidLabel>Jumlah</FormCovidLabel>
              <FormCovidInput
                type="number"
                id="number"
                placeholder="contoh : 200"
                value={total}
                onChange={changeTotalInput}
              />
            </FormCovidGroup>
            <FormCovidButton type="submit">Submit</FormCovidButton>
          </form>
        </FormCovidRight>
      </FormCovidSection>
    </FormCovidContainer>
  );
}

export default FormCovid;
