import logements from '../logements.json';


  const useGetLogement = (id?: string) => {
    if(!id) return null

    return logements.find(({id: _id}) => _id === id);
  }

  export default useGetLogement;