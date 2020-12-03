import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { point } from '@turf/helpers';
import { getGeom } from '@turf/invariant';

var checkPoint = (lat, lng, geojson) => 
  booleanPointInPolygon(point([lng, lat]), getGeom(geojson));

var type = "Feature";
var geometry = {
	type: "MultiPolygon",
	coordinates: [
		[
			[
				[
					-63.1739,
					46.1238
				],
				[
					-63.1834,
					46.114
				],
				[
					-63.1967,
					46.1159
				],
				[
					-63.1902,
					46.1234
				],
				[
					-63.1752,
					46.1279
				],
				[
					-63.1739,
					46.1238
				]
			]
		],
		[
			[
				[
					-62.4171,
					46.2027
				],
				[
					-62.4145,
					46.1963
				],
				[
					-62.4022,
					46.1884
				],
				[
					-62.4068,
					46.1851
				],
				[
					-62.4313,
					46.1899
				],
				[
					-62.4333,
					46.1966
				],
				[
					-62.418,
					46.199
				],
				[
					-62.4171,
					46.2027
				]
			]
		],
		[
			[
				[
					-63.7723,
					46.5181
				],
				[
					-63.786,
					46.5223
				],
				[
					-63.7901,
					46.5275
				],
				[
					-63.7838,
					46.5321
				],
				[
					-63.7776,
					46.5286
				],
				[
					-63.7723,
					46.5181
				]
			]
		],
		[
			[
				[
					-63.8318,
					46.6012
				],
				[
					-63.8186,
					46.6006
				],
				[
					-63.8176,
					46.5931
				],
				[
					-63.8323,
					46.5926
				],
				[
					-63.8318,
					46.6012
				]
			]
		],
		[
			[
				[
					-63.8445,
					46.6206
				],
				[
					-63.8379,
					46.6186
				],
				[
					-63.8326,
					46.6109
				],
				[
					-63.8561,
					46.5986
				],
				[
					-63.8677,
					46.6041
				],
				[
					-63.8703,
					46.6085
				],
				[
					-63.858,
					46.6115
				],
				[
					-63.8598,
					46.62
				],
				[
					-63.8673,
					46.6208
				],
				[
					-63.8759,
					46.6288
				],
				[
					-63.8709,
					46.6311
				],
				[
					-63.8539,
					46.6275
				],
				[
					-63.8445,
					46.6206
				]
			]
		],
		[
			[
				[
					-63.8599,
					46.6509
				],
				[
					-63.8362,
					46.6376
				],
				[
					-63.8075,
					46.6234
				],
				[
					-63.7567,
					46.6017
				],
				[
					-63.723,
					46.585
				],
				[
					-63.7195,
					46.5776
				],
				[
					-63.7334,
					46.5816
				],
				[
					-63.7323,
					46.5874
				],
				[
					-63.7454,
					46.5932
				],
				[
					-63.7578,
					46.5956
				],
				[
					-63.7668,
					46.6018
				],
				[
					-63.773,
					46.5959
				],
				[
					-63.7831,
					46.5938
				],
				[
					-63.7897,
					46.5896
				],
				[
					-63.7898,
					46.6072
				],
				[
					-63.7981,
					46.6103
				],
				[
					-63.8073,
					46.6178
				],
				[
					-63.8183,
					46.6235
				],
				[
					-63.8261,
					46.6305
				],
				[
					-63.8426,
					46.6394
				],
				[
					-63.8531,
					46.6411
				],
				[
					-63.8599,
					46.6509
				]
			]
		],
		[
			[
				[
					-64.0033,
					46.7477
				],
				[
					-63.9904,
					46.7399
				],
				[
					-63.9701,
					46.7237
				],
				[
					-63.9391,
					46.7018
				],
				[
					-63.8821,
					46.6642
				],
				[
					-63.8932,
					46.6659
				],
				[
					-63.9013,
					46.6755
				],
				[
					-63.9065,
					46.6771
				],
				[
					-63.9337,
					46.6972
				],
				[
					-63.953,
					46.7037
				],
				[
					-63.9521,
					46.7083
				],
				[
					-63.9621,
					46.7149
				],
				[
					-63.971,
					46.7153
				],
				[
					-63.9732,
					46.725
				],
				[
					-63.9815,
					46.7287
				],
				[
					-64.0033,
					46.7477
				]
			]
		],
		[
			[
				[
					-64.0447,
					46.7823
				],
				[
					-64.0538,
					46.7894
				],
				[
					-64.0405,
					46.7925
				],
				[
					-64.0447,
					46.7823
				]
			]
		],
		[
			[
				[
					-64.0354,
					46.8
				],
				[
					-64.0293,
					46.7929
				],
				[
					-64.0269,
					46.7842
				],
				[
					-64.0126,
					46.7615
				],
				[
					-64.0232,
					46.7686
				],
				[
					-64.0223,
					46.7754
				],
				[
					-64.0316,
					46.7797
				],
				[
					-64.0354,
					46.8
				]
			]
		],
		[
			[
				[
					-63.9886,
					47.0312
				],
				[
					-63.9877,
					47.0264
				],
				[
					-63.9895,
					47.0035
				],
				[
					-63.9912,
					46.998
				],
				[
					-63.9893,
					46.9835
				],
				[
					-63.9942,
					46.9646
				],
				[
					-63.9915,
					46.9377
				],
				[
					-63.9847,
					46.9245
				],
				[
					-63.9749,
					46.9102
				],
				[
					-63.9768,
					46.9061
				],
				[
					-63.9739,
					46.8809
				],
				[
					-63.9864,
					46.8744
				],
				[
					-64.0084,
					46.8554
				],
				[
					-64.0266,
					46.8302
				],
				[
					-64.0291,
					46.8077
				],
				[
					-64.0543,
					46.8045
				],
				[
					-64.0618,
					46.795
				],
				[
					-64.0591,
					46.7869
				],
				[
					-64.0648,
					46.7827
				],
				[
					-64.0714,
					46.7957
				],
				[
					-64.0806,
					46.7764
				],
				[
					-64.0731,
					46.7772
				],
				[
					-64.0791,
					46.7646
				],
				[
					-64.0774,
					46.7529
				],
				[
					-64.0558,
					46.7466
				],
				[
					-64.047,
					46.737
				],
				[
					-64.0294,
					46.7291
				],
				[
					-64.0176,
					46.7406
				],
				[
					-64.0086,
					46.7343
				],
				[
					-63.9994,
					46.7337
				],
				[
					-63.9845,
					46.7293
				],
				[
					-63.9862,
					46.7261
				],
				[
					-63.9793,
					46.7159
				],
				[
					-63.9673,
					46.7074
				],
				[
					-63.9603,
					46.7001
				],
				[
					-63.9522,
					46.6972
				],
				[
					-63.942,
					46.6897
				],
				[
					-63.9431,
					46.6837
				],
				[
					-63.9296,
					46.6822
				],
				[
					-63.9233,
					46.679
				],
				[
					-63.9144,
					46.669
				],
				[
					-63.9086,
					46.6575
				],
				[
					-63.8975,
					46.6514
				],
				[
					-63.8879,
					46.6492
				],
				[
					-63.8791,
					46.639
				],
				[
					-63.8817,
					46.6253
				],
				[
					-63.8781,
					46.6229
				],
				[
					-63.8777,
					46.6062
				],
				[
					-63.8595,
					46.5903
				],
				[
					-63.8508,
					46.5857
				],
				[
					-63.8325,
					46.5797
				],
				[
					-63.836,
					46.5745
				],
				[
					-63.8478,
					46.5723
				],
				[
					-63.8517,
					46.5583
				],
				[
					-63.8665,
					46.5487
				],
				[
					-63.8623,
					46.5351
				],
				[
					-63.8668,
					46.5248
				],
				[
					-63.8822,
					46.5133
				],
				[
					-63.8705,
					46.5029
				],
				[
					-63.8569,
					46.5043
				],
				[
					-63.8468,
					46.5031
				],
				[
					-63.831,
					46.5152
				],
				[
					-63.8205,
					46.5014
				],
				[
					-63.8089,
					46.4965
				],
				[
					-63.8071,
					46.4867
				],
				[
					-63.8124,
					46.481
				],
				[
					-63.8117,
					46.4674
				],
				[
					-63.8287,
					46.4716
				],
				[
					-63.8346,
					46.4694
				],
				[
					-63.8324,
					46.4629
				],
				[
					-63.8486,
					46.46
				],
				[
					-63.8122,
					46.4552
				],
				[
					-63.7984,
					46.4506
				],
				[
					-63.7925,
					46.445
				],
				[
					-63.7805,
					46.4446
				],
				[
					-63.7589,
					46.448
				],
				[
					-63.7396,
					46.4416
				],
				[
					-63.7277,
					46.4353
				],
				[
					-63.7154,
					46.4363
				],
				[
					-63.7087,
					46.4419
				],
				[
					-63.7176,
					46.448
				],
				[
					-63.7137,
					46.4548
				],
				[
					-63.6997,
					46.455
				],
				[
					-63.6952,
					46.4596
				],
				[
					-63.6956,
					46.4666
				],
				[
					-63.7009,
					46.474
				],
				[
					-63.7236,
					46.4793
				],
				[
					-63.7229,
					46.4866
				],
				[
					-63.7355,
					46.489
				],
				[
					-63.7482,
					46.4877
				],
				[
					-63.7472,
					46.4978
				],
				[
					-63.7173,
					46.5152
				],
				[
					-63.6963,
					46.5163
				],
				[
					-63.6982,
					46.5273
				],
				[
					-63.714,
					46.5324
				],
				[
					-63.7218,
					46.5307
				],
				[
					-63.7339,
					46.5334
				],
				[
					-63.7243,
					46.5393
				],
				[
					-63.7194,
					46.5482
				],
				[
					-63.7185,
					46.5561
				],
				[
					-63.7076,
					46.5619
				],
				[
					-63.701,
					46.5602
				],
				[
					-63.6999,
					46.5536
				],
				[
					-63.6939,
					46.5497
				],
				[
					-63.6862,
					46.5502
				],
				[
					-63.6784,
					46.5464
				],
				[
					-63.6698,
					46.5365
				],
				[
					-63.6568,
					46.542
				],
				[
					-63.6574,
					46.5503
				],
				[
					-63.6622,
					46.5564
				],
				[
					-63.6805,
					46.5613
				],
				[
					-63.6685,
					46.5677
				],
				[
					-63.6198,
					46.5585
				],
				[
					-63.5556,
					46.5407
				],
				[
					-63.5345,
					46.5367
				],
				[
					-63.5257,
					46.5369
				],
				[
					-63.5177,
					46.5338
				],
				[
					-63.5088,
					46.5349
				],
				[
					-63.5012,
					46.5285
				],
				[
					-63.4911,
					46.5241
				],
				[
					-63.4853,
					46.5175
				],
				[
					-63.4852,
					46.5109
				],
				[
					-63.4945,
					46.5059
				],
				[
					-63.4956,
					46.4971
				],
				[
					-63.4805,
					46.4962
				],
				[
					-63.4819,
					46.49
				],
				[
					-63.479,
					46.4812
				],
				[
					-63.4722,
					46.4815
				],
				[
					-63.4653,
					46.4758
				],
				[
					-63.4578,
					46.4635
				],
				[
					-63.4496,
					46.4694
				],
				[
					-63.4541,
					46.4769
				],
				[
					-63.4389,
					46.478
				],
				[
					-63.4432,
					46.487
				],
				[
					-63.4241,
					46.4918
				],
				[
					-63.4235,
					46.5001
				],
				[
					-63.4108,
					46.503
				],
				[
					-63.3848,
					46.4998
				],
				[
					-63.3745,
					46.5021
				],
				[
					-63.3659,
					46.4993
				],
				[
					-63.3383,
					46.4968
				],
				[
					-63.3122,
					46.49
				],
				[
					-63.3126,
					46.4856
				],
				[
					-63.3034,
					46.4784
				],
				[
					-63.2984,
					46.4696
				],
				[
					-63.2997,
					46.4653
				],
				[
					-63.2919,
					46.4588
				],
				[
					-63.288,
					46.447
				],
				[
					-63.276,
					46.4398
				],
				[
					-63.2796,
					46.4358
				],
				[
					-63.2696,
					46.4291
				],
				[
					-63.2676,
					46.4232
				],
				[
					-63.2438,
					46.4229
				],
				[
					-63.2386,
					46.4202
				],
				[
					-63.253,
					46.405
				],
				[
					-63.2461,
					46.4021
				],
				[
					-63.2365,
					46.4075
				],
				[
					-63.2259,
					46.4057
				],
				[
					-63.2154,
					46.4108
				],
				[
					-63.211,
					46.4259
				],
				[
					-63.2295,
					46.4304
				],
				[
					-63.2421,
					46.436
				],
				[
					-63.2541,
					46.4333
				],
				[
					-63.2678,
					46.4459
				],
				[
					-63.2411,
					46.4381
				],
				[
					-63.2346,
					46.4378
				],
				[
					-63.2303,
					46.432
				],
				[
					-63.2122,
					46.4319
				],
				[
					-63.1856,
					46.4302
				],
				[
					-63.1615,
					46.4306
				],
				[
					-63.1565,
					46.425
				],
				[
					-63.164,
					46.4223
				],
				[
					-63.1561,
					46.4152
				],
				[
					-63.1328,
					46.4131
				],
				[
					-63.1265,
					46.4005
				],
				[
					-63.1202,
					46.4027
				],
				[
					-63.1163,
					46.4151
				],
				[
					-63.1249,
					46.4197
				],
				[
					-63.147,
					46.423
				],
				[
					-63.1457,
					46.4301
				],
				[
					-63.1335,
					46.4303
				],
				[
					-63.1194,
					46.4254
				],
				[
					-63.0892,
					46.4191
				],
				[
					-63.0427,
					46.4134
				],
				[
					-63.0241,
					46.3986
				],
				[
					-63.0104,
					46.3972
				],
				[
					-63.0035,
					46.3943
				],
				[
					-63.0044,
					46.3812
				],
				[
					-62.9881,
					46.3599
				],
				[
					-62.9825,
					46.3594
				],
				[
					-62.9826,
					46.37
				],
				[
					-62.9769,
					46.3861
				],
				[
					-62.9793,
					46.3929
				],
				[
					-62.9705,
					46.4031
				],
				[
					-62.9709,
					46.4124
				],
				[
					-62.9813,
					46.4142
				],
				[
					-63.006,
					46.4132
				],
				[
					-63.0166,
					46.4142
				],
				[
					-63.0358,
					46.4118
				],
				[
					-63.0373,
					46.4153
				],
				[
					-62.9908,
					46.4171
				],
				[
					-62.9561,
					46.4223
				],
				[
					-62.942,
					46.4235
				],
				[
					-62.9064,
					46.4314
				],
				[
					-62.8804,
					46.4326
				],
				[
					-62.8572,
					46.4349
				],
				[
					-62.8374,
					46.4337
				],
				[
					-62.8414,
					46.4187
				],
				[
					-62.847,
					46.4141
				],
				[
					-62.847,
					46.4078
				],
				[
					-62.8387,
					46.4074
				],
				[
					-62.8184,
					46.4123
				],
				[
					-62.8209,
					46.4188
				],
				[
					-62.8329,
					46.4329
				],
				[
					-62.8222,
					46.433
				],
				[
					-62.7887,
					46.4375
				],
				[
					-62.77,
					46.4418
				],
				[
					-62.7416,
					46.4436
				],
				[
					-62.722,
					46.4307
				],
				[
					-62.7073,
					46.4315
				],
				[
					-62.7007,
					46.4275
				],
				[
					-62.6872,
					46.4235
				],
				[
					-62.6723,
					46.4277
				],
				[
					-62.6598,
					46.422
				],
				[
					-62.6541,
					46.4166
				],
				[
					-62.6372,
					46.4251
				],
				[
					-62.6286,
					46.4223
				],
				[
					-62.626,
					46.4167
				],
				[
					-62.614,
					46.4191
				],
				[
					-62.6015,
					46.4177
				],
				[
					-62.5916,
					46.4143
				],
				[
					-62.5822,
					46.4174
				],
				[
					-62.6099,
					46.4307
				],
				[
					-62.623,
					46.4323
				],
				[
					-62.6477,
					46.4319
				],
				[
					-62.6558,
					46.4329
				],
				[
					-62.6622,
					46.4374
				],
				[
					-62.6814,
					46.4429
				],
				[
					-62.6949,
					46.4401
				],
				[
					-62.7101,
					46.4405
				],
				[
					-62.7276,
					46.4458
				],
				[
					-62.6901,
					46.4566
				],
				[
					-62.6746,
					46.4577
				],
				[
					-62.6444,
					46.4633
				],
				[
					-62.6289,
					46.4676
				],
				[
					-62.6132,
					46.4653
				],
				[
					-62.5604,
					46.4692
				],
				[
					-62.5378,
					46.468
				],
				[
					-62.5173,
					46.4714
				],
				[
					-62.4723,
					46.4749
				],
				[
					-62.4452,
					46.4706
				],
				[
					-62.4248,
					46.4713
				],
				[
					-62.4115,
					46.4677
				],
				[
					-62.3745,
					46.4682
				],
				[
					-62.3605,
					46.4708
				],
				[
					-62.3337,
					46.4707
				],
				[
					-62.3188,
					46.4727
				],
				[
					-62.2595,
					46.4758
				],
				[
					-62.2393,
					46.4795
				],
				[
					-62.2238,
					46.4793
				],
				[
					-62.2112,
					46.482
				],
				[
					-62.1802,
					46.4816
				],
				[
					-62.1643,
					46.4844
				],
				[
					-62.1601,
					46.4821
				],
				[
					-62.1466,
					46.4841
				],
				[
					-62.1375,
					46.4798
				],
				[
					-62.1158,
					46.4782
				],
				[
					-62.11,
					46.4751
				],
				[
					-62.0891,
					46.4735
				],
				[
					-62.0685,
					46.4683
				],
				[
					-62.0219,
					46.4665
				],
				[
					-62.0064,
					46.4627
				],
				[
					-61.9901,
					46.4645
				],
				[
					-61.9814,
					46.457
				],
				[
					-61.9707,
					46.4518
				],
				[
					-62.0057,
					46.4299
				],
				[
					-62.023,
					46.4289
				],
				[
					-62.0348,
					46.4205
				],
				[
					-62.0571,
					46.4113
				],
				[
					-62.0633,
					46.4034
				],
				[
					-62.0817,
					46.3939
				],
				[
					-62.0894,
					46.3878
				],
				[
					-62.107,
					46.378
				],
				[
					-62.1333,
					46.3675
				],
				[
					-62.1576,
					46.3666
				],
				[
					-62.1726,
					46.3582
				],
				[
					-62.1708,
					46.3542
				],
				[
					-62.1832,
					46.3477
				],
				[
					-62.2048,
					46.3504
				],
				[
					-62.2117,
					46.3453
				],
				[
					-62.2297,
					46.345
				],
				[
					-62.239,
					46.3427
				],
				[
					-62.2462,
					46.3449
				],
				[
					-62.2502,
					46.3516
				],
				[
					-62.2637,
					46.3566
				],
				[
					-62.2796,
					46.3554
				],
				[
					-62.2798,
					46.3511
				],
				[
					-62.2705,
					46.3435
				],
				[
					-62.2816,
					46.3373
				],
				[
					-62.2934,
					46.3338
				],
				[
					-62.3181,
					46.35
				],
				[
					-62.3331,
					46.3506
				],
				[
					-62.3388,
					46.3535
				],
				[
					-62.364,
					46.3514
				],
				[
					-62.3572,
					46.3455
				],
				[
					-62.3388,
					46.342
				],
				[
					-62.3451,
					46.3334
				],
				[
					-62.3622,
					46.3314
				],
				[
					-62.3544,
					46.3271
				],
				[
					-62.3501,
					46.3208
				],
				[
					-62.367,
					46.3181
				],
				[
					-62.3499,
					46.3123
				],
				[
					-62.3434,
					46.3081
				],
				[
					-62.3476,
					46.3025
				],
				[
					-62.3579,
					46.3042
				],
				[
					-62.3741,
					46.3039
				],
				[
					-62.3717,
					46.2871
				],
				[
					-62.3667,
					46.2856
				],
				[
					-62.3576,
					46.2765
				],
				[
					-62.3758,
					46.2743
				],
				[
					-62.3747,
					46.2711
				],
				[
					-62.385,
					46.2597
				],
				[
					-62.3955,
					46.2635
				],
				[
					-62.4193,
					46.2655
				],
				[
					-62.4237,
					46.2592
				],
				[
					-62.4184,
					46.229
				],
				[
					-62.4117,
					46.2233
				],
				[
					-62.41,
					46.2123
				],
				[
					-62.4433,
					46.2083
				],
				[
					-62.4647,
					46.2089
				],
				[
					-62.471,
					46.2072
				],
				[
					-62.4853,
					46.2116
				],
				[
					-62.491,
					46.2154
				],
				[
					-62.5099,
					46.2095
				],
				[
					-62.518,
					46.2019
				],
				[
					-62.5167,
					46.1962
				],
				[
					-62.5035,
					46.1889
				],
				[
					-62.4977,
					46.1749
				],
				[
					-62.515,
					46.1728
				],
				[
					-62.5241,
					46.1808
				],
				[
					-62.5357,
					46.1797
				],
				[
					-62.5502,
					46.1871
				],
				[
					-62.5618,
					46.1799
				],
				[
					-62.5423,
					46.1679
				],
				[
					-62.5251,
					46.1591
				],
				[
					-62.5307,
					46.151
				],
				[
					-62.5414,
					46.1496
				],
				[
					-62.5472,
					46.1421
				],
				[
					-62.532,
					46.1401
				],
				[
					-62.5296,
					46.1331
				],
				[
					-62.5408,
					46.1316
				],
				[
					-62.5488,
					46.1276
				],
				[
					-62.5389,
					46.1198
				],
				[
					-62.5316,
					46.1233
				],
				[
					-62.5152,
					46.1207
				],
				[
					-62.5158,
					46.1167
				],
				[
					-62.5074,
					46.1115
				],
				[
					-62.5,
					46.1113
				],
				[
					-62.496,
					46.1204
				],
				[
					-62.4869,
					46.1212
				],
				[
					-62.4806,
					46.1182
				],
				[
					-62.4691,
					46.1221
				],
				[
					-62.4704,
					46.1335
				],
				[
					-62.4837,
					46.1352
				],
				[
					-62.5013,
					46.1319
				],
				[
					-62.508,
					46.1369
				],
				[
					-62.4937,
					46.1466
				],
				[
					-62.4847,
					46.1492
				],
				[
					-62.4678,
					46.1456
				],
				[
					-62.4666,
					46.1235
				],
				[
					-62.4485,
					46.1041
				],
				[
					-62.453,
					46.0981
				],
				[
					-62.4499,
					46.0896
				],
				[
					-62.4528,
					46.0818
				],
				[
					-62.4658,
					46.0706
				],
				[
					-62.4703,
					46.0542
				],
				[
					-62.4818,
					46.0453
				],
				[
					-62.4924,
					46.0489
				],
				[
					-62.5044,
					46.0482
				],
				[
					-62.514,
					46.044
				],
				[
					-62.5354,
					46.0393
				],
				[
					-62.5369,
					46.0367
				],
				[
					-62.5341,
					46.0222
				],
				[
					-62.5238,
					46.0231
				],
				[
					-62.5026,
					46.0118
				],
				[
					-62.4958,
					46.0153
				],
				[
					-62.4824,
					46.0166
				],
				[
					-62.4758,
					46.0208
				],
				[
					-62.4536,
					46.0152
				],
				[
					-62.4576,
					46.0036
				],
				[
					-62.4738,
					45.9932
				],
				[
					-62.5072,
					45.9751
				],
				[
					-62.5312,
					45.9705
				],
				[
					-62.5635,
					45.9659
				],
				[
					-62.6235,
					45.9643
				],
				[
					-62.6632,
					45.9591
				],
				[
					-62.6984,
					45.9621
				],
				[
					-62.7058,
					45.9592
				],
				[
					-62.7132,
					45.9626
				],
				[
					-62.7261,
					45.9644
				],
				[
					-62.7426,
					45.9599
				],
				[
					-62.7491,
					45.9554
				],
				[
					-62.7548,
					45.9602
				],
				[
					-62.7623,
					45.9577
				],
				[
					-62.7771,
					45.9593
				],
				[
					-62.7916,
					45.963
				],
				[
					-62.8242,
					45.965
				],
				[
					-62.8432,
					45.9732
				],
				[
					-62.8503,
					45.9743
				],
				[
					-62.8638,
					45.9874
				],
				[
					-62.8712,
					45.9883
				],
				[
					-62.8816,
					45.9964
				],
				[
					-62.8906,
					45.9982
				],
				[
					-62.884,
					46.0076
				],
				[
					-62.8844,
					46.0133
				],
				[
					-62.8919,
					46.0178
				],
				[
					-62.9092,
					46.0223
				],
				[
					-62.9242,
					46.0363
				],
				[
					-62.9404,
					46.0433
				],
				[
					-62.9555,
					46.0546
				],
				[
					-62.9818,
					46.0562
				],
				[
					-62.993,
					46.0534
				],
				[
					-63.014,
					46.0517
				],
				[
					-63.0235,
					46.0528
				],
				[
					-63.0324,
					46.0495
				],
				[
					-63.0404,
					46.0538
				],
				[
					-63.0254,
					46.058
				],
				[
					-63.0184,
					46.0626
				],
				[
					-63.0163,
					46.0689
				],
				[
					-63.0049,
					46.0693
				],
				[
					-62.9943,
					46.0672
				],
				[
					-62.9714,
					46.0747
				],
				[
					-62.9653,
					46.0754
				],
				[
					-62.943,
					46.0852
				],
				[
					-62.9384,
					46.0916
				],
				[
					-62.9165,
					46.0909
				],
				[
					-62.9148,
					46.0964
				],
				[
					-62.9059,
					46.1029
				],
				[
					-62.8866,
					46.109
				],
				[
					-62.8846,
					46.1196
				],
				[
					-62.8875,
					46.1275
				],
				[
					-62.8775,
					46.1324
				],
				[
					-62.875,
					46.1428
				],
				[
					-62.8863,
					46.1389
				],
				[
					-62.8897,
					46.1421
				],
				[
					-62.9009,
					46.1383
				],
				[
					-62.9005,
					46.1341
				],
				[
					-62.9092,
					46.1295
				],
				[
					-62.9154,
					46.1338
				],
				[
					-62.9276,
					46.1239
				],
				[
					-62.9324,
					46.1259
				],
				[
					-62.9451,
					46.1239
				],
				[
					-62.9529,
					46.1266
				],
				[
					-62.9627,
					46.1263
				],
				[
					-62.9658,
					46.131
				],
				[
					-62.9633,
					46.1491
				],
				[
					-62.9591,
					46.1503
				],
				[
					-62.9544,
					46.1623
				],
				[
					-62.9489,
					46.1645
				],
				[
					-62.9456,
					46.1718
				],
				[
					-62.9375,
					46.1694
				],
				[
					-62.9325,
					46.1725
				],
				[
					-62.9344,
					46.1786
				],
				[
					-62.9425,
					46.1866
				],
				[
					-62.9546,
					46.1915
				],
				[
					-62.9687,
					46.1943
				],
				[
					-62.9729,
					46.1986
				],
				[
					-62.9873,
					46.1933
				],
				[
					-62.9945,
					46.1852
				],
				[
					-62.987,
					46.1826
				],
				[
					-62.9942,
					46.1729
				],
				[
					-63.023,
					46.175
				],
				[
					-63.0229,
					46.1824
				],
				[
					-63.0137,
					46.1831
				],
				[
					-63.0128,
					46.1883
				],
				[
					-63.0252,
					46.1925
				],
				[
					-63.0378,
					46.1879
				],
				[
					-63.044,
					46.1915
				],
				[
					-63.0526,
					46.1865
				],
				[
					-63.0631,
					46.1942
				],
				[
					-63.0726,
					46.1936
				],
				[
					-63.0839,
					46.1991
				],
				[
					-63.0994,
					46.1925
				],
				[
					-63.1115,
					46.1956
				],
				[
					-63.1174,
					46.1941
				],
				[
					-63.1208,
					46.206
				],
				[
					-63.1201,
					46.214
				],
				[
					-63.1378,
					46.2274
				],
				[
					-63.143,
					46.2272
				],
				[
					-63.1611,
					46.2172
				],
				[
					-63.1629,
					46.2135
				],
				[
					-63.1565,
					46.2064
				],
				[
					-63.1436,
					46.2083
				],
				[
					-63.1401,
					46.1996
				],
				[
					-63.1345,
					46.1989
				],
				[
					-63.1293,
					46.1897
				],
				[
					-63.1402,
					46.1785
				],
				[
					-63.1555,
					46.1696
				],
				[
					-63.1797,
					46.1609
				],
				[
					-63.1925,
					46.1595
				],
				[
					-63.2018,
					46.1539
				],
				[
					-63.2234,
					46.1526
				],
				[
					-63.2278,
					46.136
				],
				[
					-63.2218,
					46.1318
				],
				[
					-63.2463,
					46.13
				],
				[
					-63.2577,
					46.1308
				],
				[
					-63.2836,
					46.1406
				],
				[
					-63.294,
					46.1459
				],
				[
					-63.3087,
					46.1505
				],
				[
					-63.3169,
					46.1477
				],
				[
					-63.3353,
					46.156
				],
				[
					-63.3452,
					46.1569
				],
				[
					-63.3617,
					46.1654
				],
				[
					-63.3854,
					46.1704
				],
				[
					-63.4011,
					46.1698
				],
				[
					-63.4125,
					46.1747
				],
				[
					-63.4341,
					46.1888
				],
				[
					-63.4501,
					46.186
				],
				[
					-63.464,
					46.1945
				],
				[
					-63.4646,
					46.1981
				],
				[
					-63.4778,
					46.2072
				],
				[
					-63.4773,
					46.2149
				],
				[
					-63.4871,
					46.2149
				],
				[
					-63.5021,
					46.2067
				],
				[
					-63.526,
					46.2031
				],
				[
					-63.5346,
					46.2142
				],
				[
					-63.5417,
					46.2162
				],
				[
					-63.5439,
					46.207
				],
				[
					-63.5583,
					46.2068
				],
				[
					-63.5675,
					46.2157
				],
				[
					-63.5799,
					46.2156
				],
				[
					-63.5856,
					46.2078
				],
				[
					-63.5992,
					46.212
				],
				[
					-63.61,
					46.2199
				],
				[
					-63.6174,
					46.2154
				],
				[
					-63.6309,
					46.2231
				],
				[
					-63.6392,
					46.225
				],
				[
					-63.6505,
					46.2215
				],
				[
					-63.6503,
					46.236
				],
				[
					-63.6588,
					46.2381
				],
				[
					-63.6741,
					46.2468
				],
				[
					-63.6839,
					46.2411
				],
				[
					-63.695,
					46.2502
				],
				[
					-63.7014,
					46.2515
				],
				[
					-63.7024,
					46.2685
				],
				[
					-63.6994,
					46.2709
				],
				[
					-63.7065,
					46.2785
				],
				[
					-63.7192,
					46.2769
				],
				[
					-63.7278,
					46.2896
				],
				[
					-63.7347,
					46.2958
				],
				[
					-63.7439,
					46.2958
				],
				[
					-63.7508,
					46.3058
				],
				[
					-63.7738,
					46.3085
				],
				[
					-63.7841,
					46.3179
				],
				[
					-63.7947,
					46.3201
				],
				[
					-63.8087,
					46.3146
				],
				[
					-63.8161,
					46.3268
				],
				[
					-63.815,
					46.3388
				],
				[
					-63.804,
					46.3416
				],
				[
					-63.7917,
					46.3372
				],
				[
					-63.7765,
					46.3409
				],
				[
					-63.7846,
					46.3448
				],
				[
					-63.7894,
					46.3525
				],
				[
					-63.8033,
					46.3613
				],
				[
					-63.8108,
					46.3718
				],
				[
					-63.8012,
					46.3715
				],
				[
					-63.7976,
					46.3662
				],
				[
					-63.78,
					46.355
				],
				[
					-63.764,
					46.3549
				],
				[
					-63.7619,
					46.3491
				],
				[
					-63.7492,
					46.346
				],
				[
					-63.7374,
					46.3519
				],
				[
					-63.7317,
					46.3487
				],
				[
					-63.7252,
					46.3541
				],
				[
					-63.7574,
					46.3692
				],
				[
					-63.7659,
					46.3692
				],
				[
					-63.765,
					46.3811
				],
				[
					-63.7517,
					46.3838
				],
				[
					-63.745,
					46.3901
				],
				[
					-63.7602,
					46.3917
				],
				[
					-63.7685,
					46.3891
				],
				[
					-63.7905,
					46.3895
				],
				[
					-63.8044,
					46.3961
				],
				[
					-63.8218,
					46.3944
				],
				[
					-63.832,
					46.3904
				],
				[
					-63.8403,
					46.3915
				],
				[
					-63.8596,
					46.3988
				],
				[
					-63.8658,
					46.4028
				],
				[
					-63.8808,
					46.4012
				],
				[
					-63.881,
					46.3944
				],
				[
					-63.8895,
					46.395
				],
				[
					-63.9034,
					46.4097
				],
				[
					-63.927,
					46.4181
				],
				[
					-63.939,
					46.4187
				],
				[
					-63.9496,
					46.4107
				],
				[
					-63.953,
					46.4051
				],
				[
					-63.941,
					46.4004
				],
				[
					-63.9569,
					46.3965
				],
				[
					-63.9819,
					46.388
				],
				[
					-64.0027,
					46.3852
				],
				[
					-64.0322,
					46.3885
				],
				[
					-64.05,
					46.3957
				],
				[
					-64.0745,
					46.3985
				],
				[
					-64.0986,
					46.3992
				],
				[
					-64.1159,
					46.4017
				],
				[
					-64.1344,
					46.4018
				],
				[
					-64.1333,
					46.4155
				],
				[
					-64.1399,
					46.4205
				],
				[
					-64.1393,
					46.4309
				],
				[
					-64.1092,
					46.4565
				],
				[
					-64.1017,
					46.4692
				],
				[
					-64.1054,
					46.4998
				],
				[
					-64.1132,
					46.5198
				],
				[
					-64.1112,
					46.5257
				],
				[
					-64.1,
					46.5346
				],
				[
					-64.0967,
					46.5412
				],
				[
					-64.0873,
					46.5491
				],
				[
					-64.0783,
					46.553
				],
				[
					-64.0759,
					46.5597
				],
				[
					-64.0668,
					46.569
				],
				[
					-64.0597,
					46.57
				],
				[
					-64.0556,
					46.5764
				],
				[
					-64.0628,
					46.5815
				],
				[
					-64.084,
					46.5859
				],
				[
					-64.0746,
					46.5943
				],
				[
					-64.0788,
					46.6038
				],
				[
					-64.0822,
					46.6201
				],
				[
					-64.0805,
					46.6248
				],
				[
					-64.0674,
					46.6305
				],
				[
					-64.0731,
					46.634
				],
				[
					-64.0848,
					46.6329
				],
				[
					-64.0966,
					46.6201
				],
				[
					-64.0987,
					46.6139
				],
				[
					-64.1072,
					46.6027
				],
				[
					-64.1132,
					46.6007
				],
				[
					-64.1172,
					46.5926
				],
				[
					-64.1275,
					46.5881
				],
				[
					-64.1526,
					46.5965
				],
				[
					-64.1814,
					46.6132
				],
				[
					-64.1882,
					46.615
				],
				[
					-64.1915,
					46.6252
				],
				[
					-64.2097,
					46.6269
				],
				[
					-64.2167,
					46.6302
				],
				[
					-64.2321,
					46.6294
				],
				[
					-64.2398,
					46.6259
				],
				[
					-64.2608,
					46.6256
				],
				[
					-64.3009,
					46.6307
				],
				[
					-64.3228,
					46.6216
				],
				[
					-64.3431,
					46.6196
				],
				[
					-64.3698,
					46.6208
				],
				[
					-64.383,
					46.6155
				],
				[
					-64.3925,
					46.6274
				],
				[
					-64.3975,
					46.6393
				],
				[
					-64.4114,
					46.658
				],
				[
					-64.4134,
					46.6819
				],
				[
					-64.4096,
					46.7076
				],
				[
					-64.3992,
					46.7239
				],
				[
					-64.3875,
					46.7298
				],
				[
					-64.3772,
					46.7387
				],
				[
					-64.3745,
					46.7471
				],
				[
					-64.3579,
					46.7556
				],
				[
					-64.3359,
					46.7731
				],
				[
					-64.3052,
					46.7931
				],
				[
					-64.2843,
					46.8086
				],
				[
					-64.2602,
					46.8341
				],
				[
					-64.2539,
					46.8482
				],
				[
					-64.2394,
					46.865
				],
				[
					-64.2342,
					46.8798
				],
				[
					-64.226,
					46.8882
				],
				[
					-64.2265,
					46.8953
				],
				[
					-64.2152,
					46.9041
				],
				[
					-64.1891,
					46.9273
				],
				[
					-64.1845,
					46.9357
				],
				[
					-64.1657,
					46.95
				],
				[
					-64.1507,
					46.9568
				],
				[
					-64.1344,
					46.9612
				],
				[
					-64.1201,
					46.9679
				],
				[
					-64.108,
					46.977
				],
				[
					-64.088,
					46.988
				],
				[
					-64.0682,
					46.9945
				],
				[
					-64.0475,
					47.0067
				],
				[
					-64.0396,
					47.0159
				],
				[
					-64.0217,
					47.0275
				],
				[
					-64.0148,
					47.0381
				],
				[
					-63.9955,
					47.061
				],
				[
					-63.9915,
					47.0606
				],
				[
					-63.9876,
					47.0456
				],
				[
					-63.9886,
					47.0312
				]
			]
		]
	]
};
var properties = {
	PRUID: "11",
	PRNAME: "Prince Edward Island / �le-du-Prince-�douard",
	PRENAME: "Prince Edward Island",
	PRFNAME: "�le-du-Prince-�douard",
	PREABBR: "P.E.I.",
	PRFABBR: "�.-P.-�.",
	rmapshaperid: 3
};
var id = 3;
var geojson = {
	type: type,
	geometry: geometry,
	properties: properties,
	id: id
};

var pe = (lat, lng) => checkPoint(lat, lng, geojson);

export default pe;
