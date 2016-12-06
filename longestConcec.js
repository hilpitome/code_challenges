function longestConsec(strarr, k) {
longest_consec = "";
  if(k<0 || k>strarr.length){
      return longest_consec;
    } else{

        for (i=0; i<strarr.length; i++){
          check = "";
          j = i+k;
          strarrSliced = strarr.slice(i, j);
          for(y = 0; y<strarrSliced.length; y++){
             check = check + strarrSliced[y];

           }
           if (check.length>longest_consec.length){
             longest_consec = check;

           }

      }
      return longest_consec;

  }
}
