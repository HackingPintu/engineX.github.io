Element("np").write(f"import numpy as np")
Element("plt").write(f"import matplotlib.pyplot as plt")
Element("l3").write(f"n=len(x) #no find the no. of features")
Element("l4").write(f"l=0.001 #learning rate")
Element("l5").write(f"sumx=np.sum(x)")
Element("l6").write(f"sumy=np.sum(y)")
Element("l7").write(f"xy=x*y")
Element("l8").write(f"sumxy=np.sum(xy)")
Element("l9").write(f"x2=x*x")
Element("l10").write(f"sumx2=np.sum(x2)")
Element("l11").write(f"y2=y*y")
Element("l12").write(f"sumy2=np.sum(y2)")
Element("l13").write(f"b0=((sumy)*(sumx2)-(sumxy*sumx))/(n*sumx2-(sumx**2)) #Intercept")
Element("l14").write(f"b1=((n*sumxy)-(sumx*sumy))/(n*sumx2-(sumx**2)) #Slope")
Element("l15").write(f"yprd=b0+b1*x #Predicted value")
Element("l16").write(f"def update(x,y,yprd,b0,b1,n):")
Element("l17").write(f"    for i in range(200):")
Element("l18").write(f"    error=yprd-y")
Element("l19").write(f"    db1error=x*error")
Element("l20").write(f"    db1=np.sum(db1error)")
Element("l21").write(f"    db1*=(-2/n)")
Element("l22").write(f"    db0=np.sum(error)")
Element("l23").write(f"    db0*=(-2/n)")
Element("l24").write(f"    b0=b0-(l*db0)")
Element("l25").write(f"    b1=b1-(l*db1)")
Element("l26").write(f"    yprd=b0+b1*x")
Element("l27").write(f"    update(x,y,yprd,b0,b1,n)")