const questions = [
    {
        "question": "精益生产的核心思想是？",
        "options": [
            "A. 增加库存",
            "B. 消除浪费",
            "C. 扩大产能",
            "D. 降低质量"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：消除浪费"
    },
    {
        "question": "5S 管理的五个步骤是？",
        "options": [
            "A. 计划、执行、检查、处理、改进",
            "B. 整理、整顿、清扫、清洁、素养",
            "C. 启动、规划、执行、监控、收尾",
            "D. 设计、生产、销售、服务、反馈"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：整理、整顿、清扫、清洁、素养"
    },
    {
        "question": "DMAIC 流程中，“D” 代表什么阶段？",
        "options": [
            "A. 测量（Measure）",
            "B. 定义（Define）",
            "C. 分析（Analyze）",
            "D. 改进（Improve）"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：定义（Define）"
    },
    {
        "question": "鱼骨图的主要作用是？",
        "options": [
            "A. 统计数据分布",
            "B. 寻找问题根本原因",
            "C. 绘制流程图",
            "D. 制定工作计划"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：寻找问题根本原因"
    },
    {
        "question": "头脑风暴的原则之一是？",
        "options": [
            "A. 必须批评",
            "B. 不许评价",
            "C. 限制发言",
            "D. 追求质量"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：不许评价"
    },
    {
        "question": "目视化管理的主要目的是？",
        "options": [
            "A. 装饰工作环境",
            "B. 一目了然发现异常",
            "C. 增加员工压力",
            "D. 隐藏问题"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：一目了然发现异常"
    },
    {
        "question": "六西格玛中的 “σ” 代表什么？",
        "options": [
            "A. 员工数量",
            "B. 质量水平",
            "C. 设备型号",
            "D. 生产速度"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：质量水平"
    },
    {
        "question": "价值流图（VSM）的作用是？",
        "options": [
            "A. 计算生产成本",
            "B. 识别流程中的浪费",
            "C. 设计组织结构",
            "D. 管理客户关系"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：识别流程中的浪费"
    },
    {
        "question": "U 型线布局的优势是？",
        "options": [
            "A. 增加在制品",
            "B. 减少搬运距离",
            "C. 延长生产周期",
            "D. 降低效率"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：减少搬运距离"
    },
    {
        "question": "持续改进（CI）的英文全称是？",
        "options": [
            "A. Creative Innovation",
            "B. Continuous Improvement",
            "C. Customer Insight",
            "D. Cost Increase"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：Continuous Improvement"
    },
    {
        "question": "标准化工作的目的是？",
        "options": [
            "A. 增加工作复杂性",
            "B. 减少变异，维持改进",
            "C. 限制员工操作",
            "D. 提高错误率"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：减少变异，维持改进"
    },
    {
        "question": "拉动式生产的核心是？",
        "options": [
            "A. 提前生产储备",
            "B. 按客户需求生产",
            "C. 最大化设备运行",
            "D. 最小化人员投入"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：按客户需求生产"
    },
    {
        "question": "5S 中的 “整理” 是指？",
        "options": [
            "A. 打扫地面卫生",
            "B. 区分需要与不需要物品",
            "C. 规范工具摆放",
            "D. 养成良好习惯"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：区分需要与不需要物品"
    },
    {
        "question": "防错法（Poka-Yoke）的作用是？",
        "options": [
            "A. 增加检验环节",
            "B. 防止人为错误",
            "C. 提高生产成本",
            "D. 降低效率"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：防止人为错误"
    },
    {
        "question": "精益六西格玛结合了什么？",
        "options": [
            "A. 市场营销与财务",
            "B. 精益生产与六西格玛工具",
            "C. 人力资源与技术",
            "D. 设计与研发"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：精益生产与六西格玛工具"
    },
    {
        "question": "破窗效应说明什么？",
        "options": [
            "A. 质量影响成本",
            "B. 环境影响行为",
            "C. 效率影响产能",
            "D. 沟通影响协作"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：环境影响行为"
    },
    {
        "question": "鱼骨图的发明者是？",
        "options": [
            "A. 牛顿",
            "B. 石川馨",
            "C. 爱因斯坦",
            "D. 达尔文"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：石川馨"
    },
    {
        "question": "目视化管理中，红色通常代表？",
        "options": [
            "A. 合格",
            "B. 异常或禁止",
            "C. 待处理",
            "D. 正常"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：异常或禁止"
    },
    {
        "question": "多能工的目的是？",
        "options": [
            "A. 增加员工负担",
            "B. 提高产线灵活性",
            "C. 减少设备数量",
            "D. 降低质量标准"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：提高产线灵活性"
    },
    {
        "question": "CI 项目的主要奖励依据是？",
        "options": [
            "A. 项目周期长短",
            "B. 节约成果与创新性",
            "C. 团队人数多少",
            "D. 汇报文档长度"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：节约成果与创新性"
    },
    {
        "question": "测量阶段的主要工作是？",
        "options": [
            "A. 分析问题原因",
            "B. 收集数据量化现状",
            "C. 实施改进方案",
            "D. 控制流程变异"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：收集数据量化现状"
    },
    {
        "question": "价值流图的两个状态是？",
        "options": [
            "A. 过去状态与现在状态",
            "B. 当前状态与未来状态",
            "C. 理想状态与完美状态",
            "D. 计划状态与执行状态"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：当前状态与未来状态"
    },
    {
        "question": "5S 中的 “清扫” 是指？",
        "options": [
            "A. 丢弃无用物品",
            "B. 清除垃圾与灰尘",
            "C. 规范摆放位置",
            "D. 维持清洁成果"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：清除垃圾与灰尘"
    },
    {
        "question": "标准化作业的三要素包括？",
        "options": [
            "A. 人员、设备、材料",
            "B. 节拍时间、作业顺序、标准在制品",
            "C. 计划、执行、检查",
            "D. 质量、成本、交付"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：节拍时间、作业顺序、标准在制品"
    },
    {
        "question": "头脑风暴适合在什么阶段使用？",
        "options": [
            "A. 问题定义",
            "B. 创意构思",
            "C. 方案执行",
            "D. 效果评估"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：创意构思"
    },
    {
        "question": "精益生产的目标是？",
        "options": [
            "A. 最大化生产速度",
            "B. 以最少投入实现最大价值",
            "C. 最小化产品种类",
            "D. 最大化库存水平"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：以最少投入实现最大价值"
    },
    {
        "question": "SIPOC 图中的 “S” 代表什么？",
        "options": [
            "A. 输入（Input）",
            "B. 供应商（Supplier）",
            "C. 流程（Process）",
            "D. 输出（Output）"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：供应商（Supplier）"
    },
    {
        "question": "浪费的常见类型包括？",
        "options": [
            "A. 人员培训、设备维护",
            "B. 生产过剩、等待、运输",
            "C. 质量检验、客户反馈",
            "D. 产品设计、市场调研"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：生产过剩、等待、运输"
    },
    {
        "question": "控制阶段的主要目标是？",
        "options": [
            "A. 定义项目范围",
            "B. 维持改进成果",
            "C. 测量现状数据",
            "D. 分析根本原因"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：维持改进成果"
    },
    {
        "question": "目视化管理的原则包括？",
        "options": [
            "A. 简单化、复杂化、多样化",
            "B. 视觉化、透明化、界限化",
            "C. 色彩化、黑白化、灰度化",
            "D. 规范化、随意化、自由化"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：视觉化、透明化、界限化"
    },
    {
        "question": "六西格玛的核心方法是？",
        "options": [
            "A. SWOT",
            "B. DMAIC",
            "C. PDCA",
            "D. SMART"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：DMAIC"
    },
    {
        "question": "5S 中的 “素养” 是指？",
        "options": [
            "A. 打扫卫生",
            "B. 养成良好习惯",
            "C. 整理物品",
            "D. 整顿工具"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：养成良好习惯"
    },
    {
        "question": "拉动式生产与推动式生产的区别是？",
        "options": [
            "A. 按库存生产 vs 按订单生产",
            "B. 按需生产 vs 按计划生产",
            "C. 按设备生产 vs 按人员生产",
            "D. 按质量生产 vs 按成本生产"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：按需生产 vs 按计划生产"
    },
    {
        "question": "常见的现场浪费中，“等待” 指什么？",
        "options": [
            "A. 物料短缺",
            "B. 人员或设备闲置",
            "C. 订单延迟",
            "D. 质量问题"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：人员或设备闲置"
    },
    {
        "question": "精益工厂布局的原则包括？",
        "options": [
            "A. 最长距离、复杂原则",
            "B. 最短距离、流畅原则",
            "C. 人员密集、设备密集",
            "D. 随意摆放、自由流动"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：最短距离、流畅原则"
    },
    {
        "question": "鱼骨图中的 “鱼刺” 代表什么？",
        "options": [
            "A. 最终的结果",
            "B. 可能的原因",
            "C. 改善的对策",
            "D. 流程的步骤"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：可能的原因"
    },
    {
        "question": "CI 一页报告需要包含什么？",
        "options": [
            "A. 财务审计报告",
            "B. 改善前后对比图",
            "C. 员工考勤记录",
            "D. 供应商清单"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：改善前后对比图"
    },
    {
        "question": "标准化工作的作用是？",
        "options": [
            "A. 增加变化，提高创新",
            "B. 减少变化，稳定质量",
            "C. 减少文档，简化流程",
            "D. 增加成本，降低效率"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：减少变化，稳定质量"
    },
    {
        "question": "目视化管理中的 “透明化” 是指？",
        "options": [
            "A. 使用透明材料",
            "B. 暴露隐藏问题",
            "C. 公开员工隐私",
            "D. 隐藏流程细节"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：暴露隐藏问题"
    },
    {
        "question": "5S 的最终目标是？",
        "options": [
            "A. 保持环境整洁",
            "B. 建立精益文化",
            "C. 增加生产效率",
            "D. 减少质量问题"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：建立精益文化"
    },
    {
        "question": "六西格玛中的 “六西格玛水平” 意味着？",
        "options": [
            "A. 缺陷率为 0",
            "B. 百万机会缺陷数 3.4",
            "C. 缺陷率 10%",
            "D. 缺陷率 50%"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：百万机会缺陷数 3.4"
    },
    {
        "question": "头脑风暴中鼓励什么？",
        "options": [
            "A. 批判性思维",
            "B. 异想天开的想法",
            "C. 少数人发言",
            "D. 追求完美方案"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：异想天开的想法"
    },
    {
        "question": "价值流图分析的第一步是？",
        "options": [
            "A. 设计未来状态图",
            "B. 绘制当前状态图",
            "C. 实施改进措施",
            "D. 评估效果"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：绘制当前状态图"
    },
    {
        "question": "精益生产中的 “看板” 作用是？",
        "options": [
            "A. 装饰车间",
            "B. 传递生产信号",
            "C. 记录员工绩效",
            "D. 显示设备状态"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：传递生产信号"
    },
    {
        "question": "布局优化的目标是？",
        "options": [
            "A. 增加库存空间",
            "B. 减少搬运与等待",
            "C. 延长生产周期",
            "D. 降低设备利用率"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：减少搬运与等待"
    },
    {
        "question": "防错法的常见工具包括？",
        "options": [
            "A. 计算器、文件夹",
            "B. 限位装置、传感器",
            "C. 扫帚、拖把",
            "D. 电脑、打印机"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：限位装置、传感器"
    },
    {
        "question": "CI 项目的来源可以是？",
        "options": [
            "A. 个人兴趣、娱乐活动",
            "B. 员工建议、客户需求、公司战略",
            "C. 竞争对手动态、市场广告",
            "D. 天气变化、季节因素"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：员工建议、客户需求、公司战略"
    },
    {
        "question": "测量阶段需要什么数据？",
        "options": [
            "A. 未来预测数据",
            "B. 现状数据，如缺陷率、工时",
            "C. 历史数据",
            "D. 无关数据"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：现状数据，如缺陷率、工时"
    },
    {
        "question": "目视化管理中的 “界限化” 是指？",
        "options": [
            "A. 划分部门界限",
            "B. 明确区域功能边界",
            "C. 限制员工活动",
            "D. 设定生产目标"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：明确区域功能边界"
    },
    {
        "question": "精益六西格玛的主要受益者是？",
        "options": [
            "A. 仅企业",
            "B. 客户、企业、员工",
            "C. 仅客户",
            "D. 仅员工"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：客户、企业、员工"
    },
    {
        "question": "5S 中的 “整顿” 重点是？",
        "options": [
            "A. 丢弃无用物品",
            "B. 定点定位，方便取放",
            "C. 每天清扫",
            "D. 养成习惯"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：定点定位，方便取放"
    },
    {
        "question": "多能工是指员工具备什么能力？",
        "options": [
            "A. 仅操作一种设备",
            "B. 操作多种设备或工序",
            "C. 管理多个团队",
            "D. 设计产品"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：操作多种设备或工序"
    },
    {
        "question": "破窗效应实验中，车辆被破坏的原因是？",
        "options": [
            "A. 车辆质量差",
            "B. 环境无序",
            "C. 停放时间长",
            "D. 天气恶劣"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：环境无序"
    },
    {
        "question": "六西格玛的 “改进阶段” 任务是？",
        "options": [
            "A. 定义问题",
            "B. 制定并验证解决方案",
            "C. 测量现状",
            "D. 控制流程"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：制定并验证解决方案"
    },
    {
        "question": "精益生产中的 “流动” 指什么？",
        "options": [
            "A. 断断续续的生产",
            "B. 连续无间断的生产流程",
            "C. 大批量生产",
            "D. 小批量生产"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：连续无间断的生产流程"
    },
    {
        "question": "鱼骨图适合在什么阶段使用？",
        "options": [
            "A. 定义问题",
            "B. 分析问题原因",
            "C. 实施改进",
            "D. 控制成果"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：分析问题原因"
    },
    {
        "question": "CI 中的 “Saving” 指什么？",
        "options": [
            "A. 时间浪费",
            "B. 成本节约",
            "C. 质量损失",
            "D. 人员增加"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：成本节约"
    },
    {
        "question": "目视化管理的常见工具包括？",
        "options": [
            "A. 电子邮件、文件",
            "B. 看板、颜色标识、区域线",
            "C. 会议、报告",
            "D. 电话、对讲机"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：看板、颜色标识、区域线"
    },
    {
        "question": "标准化作业文件需要包含？",
        "options": [
            "A. 员工姓名、日期",
            "B. 操作步骤、标准时间、质量要求",
            "C. 设备型号、供应商",
            "D. 客户信息、订单号"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：操作步骤、标准时间、质量要求"
    },
    {
        "question": "精益生产的 “拉动” 是指？",
        "options": [
            "A. 由库存拉动生产",
            "B. 由客户需求拉动生产",
            "C. 由设备拉动生产",
            "D. 由管理层拉动生产"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：由客户需求拉动生产"
    },
    {
        "question": "控制图的提出者是？",
        "options": [
            "A. 休哈特",
            "B. 道奇",
            "C. 泰勒",
            "D. 吉尔布雷斯"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：休哈特"
    },
    {
        "question": "国家标准对 “标准化” 的定义是？",
        "options": [
            "A. 为获得最佳秩序制定共同条款的活动",
            "B. 规范生产流程的活动",
            "C. 统一员工操作的活动",
            "D. 减少浪费的活动"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：为获得最佳秩序制定共同条款的活动"
    },
    {
        "question": "工业工程的核心是？",
        "options": [
            "A. 提高产品质量",
            "B. 降低成本提高效率",
            "C. 优化设备布局",
            "D. 增加生产规模"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：降低成本提高效率"
    },
    {
        "question": "PQ 分析中的 “Q” 代表？",
        "options": [
            "A. 产品型号",
            "B. 生产数量",
            "C. 加工路径",
            "D. 质量等级"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：生产数量"
    },
    {
        "question": "ECRS 原则中的 “R” 代表？",
        "options": [
            "A. 取消（Eliminate）",
            "B. 合并（Combine）",
            "C. 重排（Rearrange）",
            "D. 简化（Simplify）"
        ],
        "answer": 2,
        "explanation": "正确答案是C，即：重排（Rearrange）"
    },
    {
        "question": "方法研究的分析层次顺序是？",
        "options": [
            "A. 程序分析→作业分析→动作分析",
            "B. 动作分析→作业分析→程序分析",
            "C. 作业分析→程序分析→动作分析",
            "D. 程序分析→动作分析→作业分析"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：程序分析→作业分析→动作分析"
    },
    {
        "question": "作业测定的科学方法是？",
        "options": [
            "A. 经验判断法",
            "B. 历史记录法",
            "C. 作业测定法",
            "D. 统计分析法"
        ],
        "answer": 2,
        "explanation": "正确答案是C，即：作业测定法"
    },
    {
        "question": "节拍时间（TT）的计算公式是？",
        "options": [
            "A. 有效生产时间 / 需求数量",
            "B. 需求数量 / 有效生产时间",
            "C. 周期时间 / 需求数量",
            "D. 需求数量 / 周期时间"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：有效生产时间 / 需求数量"
    },
    {
        "question": "标准化的主要作用不包括？",
        "options": [
            "A. 防止贸易壁垒",
            "B. 促进技术合作",
            "C. 增加流程复杂性",
            "D. 提高生产稳定性"
        ],
        "answer": 2,
        "explanation": "正确答案是C，即：增加流程复杂性"
    },
    {
        "question": "工业工程与精益生产的共同点是？",
        "options": [
            "A. 都注重消除浪费",
            "B. 都起源于美国",
            "C. 都以设备为核心",
            "D. 都侧重长周期规划"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：都注重消除浪费"
    },
    {
        "question": "生产线平衡的目标是？",
        "options": [
            "A. 消除工序间等待浪费",
            "B. 增加瓶颈工序",
            "C. 提高库存水平",
            "D. 减少设备维护"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：消除工序间等待浪费"
    },
    {
        "question": "线边库的作用不包括？",
        "options": [
            "A. 增加物料搬运距离",
            "B. 减少动作浪费",
            "C. 避免物料短缺",
            "D. 明确分工边界"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：增加物料搬运距离"
    },
    {
        "question": "先进先出（FIFO）的目的是？",
        "options": [
            "A. 防止过量生产",
            "B. 增加库存",
            "C. 延迟交付",
            "D. 混淆物料顺序"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：防止过量生产"
    },
    {
        "question": "OEE 的三要素包括？",
        "options": [
            "A. 可用性、性能、质量",
            "B. 速度、数量、成本",
            "C. 人员、设备、材料",
            "D. 计划、执行、检查"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：可用性、性能、质量"
    },
    {
        "question": "单件流的特点是？",
        "options": [
            "A. 逐件加工，减少等待",
            "B. 批量生产，集中加工",
            "C. 优先处理紧急订单",
            "D. 依赖库存缓冲"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：逐件加工，减少等待"
    },
    {
        "question": "防错机制（Poka-yoke）的核心是？",
        "options": [
            "A. 预防优于检测",
            "B. 事后检验",
            "C. 增加人工检查",
            "D. 依赖经验"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：预防优于检测"
    },
    {
        "question": "JIT 的目标是？",
        "options": [
            "A. 按需按时按量生产",
            "B. 提前生产储备",
            "C. 最大化设备利用率",
            "D. 最小化人员投入"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：按需按时按量生产"
    },
    {
        "question": "动作经济原理旨在？",
        "options": [
            "A. 减少无效动作，提高效率",
            "B. 增加动作复杂度",
            "C. 鼓励单手操作",
            "D. 忽视人体疲劳"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：减少无效动作，提高效率"
    },
    {
        "question": "SMED 的目标是？",
        "options": [
            "A. 缩短换模时间",
            "B. 延长生产周期",
            "C. 增加模具库存",
            "D. 降低设备精度"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：缩短换模时间"
    },
    {
        "question": "人机工程的核心是？",
        "options": [
            "A. 优化人 - 机 - 环境系统",
            "B. 忽视操作者舒适度",
            "C. 仅关注设备性能",
            "D. 增加工作强度"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：优化人 - 机 - 环境系统"
    },
    {
        "question": "拉动式生产的信号传递依靠？",
        "options": [
            "A. 实际需求（看板）",
            "B. 市场预测",
            "C. 管理层指令",
            "D. 库存水平"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：实际需求（看板）"
    },
    {
        "question": "看板管理的作用是？",
        "options": [
            "A. 协调生产流程，避免过量",
            "B. 增加生产环节",
            "C. 隐藏问题",
            "D. 延迟信息传递"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：协调生产流程，避免过量"
    },
    {
        "question": "PDCA 循环的四个阶段是？",
        "options": [
            "A. 计划、执行、检查、处理",
            "B. 启动、规划、执行、收尾",
            "C. 定义、测量、分析、改进",
            "D. 设计、生产、销售、服务"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：计划、执行、检查、处理"
    },
    {
        "question": "单元化生产的优势是？",
        "options": [
            "A. 灵活应对多品种小批量",
            "B. 仅适用于大规模生产",
            "C. 增加工序间等待",
            "D. 依赖固定生产线"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：灵活应对多品种小批量"
    },
    {
        "question": "作业成本法（ABC）的核心是？",
        "options": [
            "A. 按作业量精准分摊成本",
            "B. 平均分摊成本",
            "C. 忽略间接成本",
            "D. 依赖传统核算"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：按作业量精准分摊成本"
    },
    {
        "question": "A3 报告的作用是？",
        "options": [
            "A. 系统呈现问题解决流程",
            "B. 冗长记录细节",
            "C. 替代现场改善",
            "D. 仅用于高层汇报"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：系统呈现问题解决流程"
    },
    {
        "question": "精益生产起源于？",
        "options": [
            "A. 丰田汽车公司",
            "B. 通用电气",
            "C. 福特汽车",
            "D. 西门子"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：丰田汽车公司"
    },
    {
        "question": "5S 中的 “整顿” 重点是？",
        "options": [
            "A. 定点定位，方便取放",
            "B. 丢弃无用物品",
            "C. 每天清扫",
            "D. 养成习惯"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：丢弃无用物品"
    },
    {
        "question": "瓶颈工序是指？",
        "options": [
            "A. 生产节拍最慢的环节",
            "B. 最快的环节",
            "C. 人工最多的环节",
            "D. 设备最贵的环节"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：最快的环节"
    },
    {
        "question": "线边库容器设计需考虑？",
        "options": [
            "A. 尺寸、形状、可移动性",
            "B. 颜色鲜艳度",
            "C. 供应商品牌",
            "D. 成本最低"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：颜色鲜艳度"
    },
    {
        "question": "推动式生产的缺点是？",
        "options": [
            "A. 库存积压或缺货",
            "B. 响应速度快",
            "C. 减少浪费",
            "D. 提升灵活性"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：响应速度快"
    },
    {
        "question": "动作经济原理中，双手并用是为了？",
        "options": [
            "A. 平衡负荷，减少疲劳",
            "B. 增加操作难度",
            "C. 仅用单手",
            "D. 忽视人体结构"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：增加操作难度"
    },
    {
        "question": "人机工程设计的依据是？",
        "options": [
            "A. 人体测量数据",
            "B. 设备参数",
            "C. 管理层偏好",
            "D. 行业标准"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：设备参数"
    },
    {
        "question": "拉动式生产的 “超市” 指？",
        "options": [
            "A. 线边库缓存区",
            "B. 实体超市",
            "C. 供应商仓库",
            "D. 虚拟库存"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：实体超市"
    },
    {
        "question": "标准化的作用是？",
        "options": [
            "A. 稳定流程，减少变异",
            "B. 限制创新",
            "C. 增加文档数量",
            "D. 降低效率"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：限制创新"
    },
    {
        "question": "防错机制的例子是？",
        "options": [
            "A. 零部件唯一接口设计",
            "B. 人工反复检查",
            "C. 增加检验工序",
            "D. 依赖员工经验"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：人工反复检查"
    },
    {
        "question": "SMED 中的内部作业是指？",
        "options": [
            "A. 必须停机完成的作业",
            "B. 可提前准备的作业",
            "C. 与换模无关的作业",
            "D. 外包作业"
        ],
        "answer": 1,
        "explanation": "正确答案是B，即：可提前准备的作业"
    },
    {
        "question": "动线优化设计的核心目标是？",
        "options": [
            "A. 缩短物料搬运距离，提升效率",
            "B. 增加生产线复杂度",
            "C. 依赖自动化设备",
            "D. 忽视人员流动"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：缩短物料搬运距离，提升效率"
    },
    {
        "question": "看板管理中，生产看板的主要作用是？",
        "options": [
            "A. 指示前工序生产数量与种类",
            "B. 传递物料领取信息",
            "C. 记录库存水平",
            "D. 替代人工沟通"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：指示前工序生产数量与种类"
    },
    {
        "question": "人机工程工位设计中，操作台面高度调整的依据是？",
        "options": [
            "A. 操作者身高与臂展数据",
            "B. 设备尺寸",
            "C. 行业通用标准",
            "D. 管理层偏好"
        ],
        "answer": 0,
        "explanation": "正确答案是A，即：操作者身高与臂展数据"
    }
];