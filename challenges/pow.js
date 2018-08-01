function pow(base, power) {
    if(power == 0){return 1}
    else {
      if(power < 0){
        return pow(base, power+1) / base;
      } else if (power > 0){
        return pow(base, power-1) * base;

      }
    };
}