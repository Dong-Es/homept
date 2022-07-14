function selectAll(selectAll)  {
    const checkboxes 
         = document.getElementsByName('ck');
    
    checkboxes.forEach((checkbox) => {
      checkbox.checked = selectAll.checked;
    })
  }
