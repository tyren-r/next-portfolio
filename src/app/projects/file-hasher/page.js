
import FileHasherUI from "@/(components)/(projects)/hasher/ui/hasherUI";

function Hasher() {
  const styles= {
   container:{ fontFamily:'sans-serif',textAlign:'center'},
    mainBox : {backgroundImage: "linear-gradient(#FFFFFF,#D5D5D3)",minHeight:'50vh',border:'1px solid grey',margin:'4% 6%'}
  }
  return (
    <div style={styles.container}>
       <div style={styles.mainBox}>
         <h1 >Basic File Hasher</h1>
        <FileHasherUI />
      </div>
    </div>
  );
}

export default Hasher;
