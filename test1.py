import json

# 构建数据
data = {
    "code": 0,
    "msg": "",
    "count": 6,
    "data": []
}
import read_wzd
from read_wzd import result
for i,res in enumerate(result):
    # print(i)
    wave_data=[]
    dataindex=7
    while(dataindex<=(len(res)-2)):
        pushdata=res[dataindex:dataindex+2]
        wave_data.append(pushdata)
        dataindex+=2
    print(wave_data)
    item = {
      "id": 10001+i,
      "data type": -1,
      "noise": -1,
      "p-wave arrival time": -1,
      "s-wave arrival time": -1,
      "time": "2017-09-05 21:43:22:355",
      "wave-data":wave_data.copy()
    }
    data["data"].append(item)
    print(data["data"][i]["wave-data"])

# 将数据写入JSON文件
with open("D:\\python\\Python310\\all-project\\bigscreen-second\\static\\weizhen_1.json", "w", encoding="utf-8") as json_file:
    json.dump(data, json_file, ensure_ascii=False, indent=2)

print("JSON文件已生成。")
