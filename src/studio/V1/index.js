import React from "react";
import "./styles.css";
const V1 = () => {
  return (
    <React.Fragment>
      <h1>AI Courseware Development Studio</h1>
      <div className="wrapper">
        <div className="box box1 row0">
          <div className="nested">Training Data Set 생성</div>
          <div className="nested">모델 구축</div>
          <div className="nested">모델 컴파일</div>
          <div className="nested">모델 학습</div>
          <div className="nested">모델 평가</div>
          <div className="nested">모델 예측</div>
        </div>
        <div className="box box2 row1">
          <div className="nested">Prerequisite 1</div>
          <div className="nested">Prerequisite 2</div>
          <div className="nested">Prerequisite 3</div>
          <div className="nested">Prerequisite 4</div>
          <div className="nested">Prerequisite 5</div>
        </div>
        <div className="box box2 row2">
          <div className="nested">
            <div>Concept: 트레이닝 데이터셋</div>
            <div>
              Training Data: 학습에 사용되는 데이터로서 가중치와 바이어스를
              최적화하기 위해 사용된다.
            </div>
            <div>
              Validation Data: 학습하는 동안 1 epoch마다 과적합(overfitting)을
              확인하기 위해 사용된다. 현재의 손실함수 값을 확인.
            </div>
            <div>
              Testing Data: 학습 후에 정확도를 평가하거나 임의의 입력데 대한
              결과를 예측하기 사용된다. 평가와 예측에 사용.
            </div>
          </div>
          <div className="nested">
            <div> Concept: Keras Model</div>
            <div>
              입력layer: 입력으로 들어오는 다차원 데이터를 1차원으로 정열하기
              위해 사용되는 Layer. 일반적으로 Flatten. 입력데이터(차원)의 수를
              input_shape=(1, )로 기술
            </div>
            <div>
              Dense Layer: 각 layer의 입력과 출력 사이에 위치하는 모든 노드가
              서로 연결되어 있는 완전 연결 layer(FCL)을 나타내며
            </div>
            <div>
              node Activation Function: 선형회귀: linear, 일반적 분류에는
              sigmoid, softmax, relu, tanh 등이 데이터에 따라 다양하게 사용
            </div>
          </div>
          <div className="nested">
            <div>Concept: compile</div>
            <div>
              구축된 모델이 기계가 알수 있는 형태의 언어로 변환하며, 최적화
              방법, 오차함수, 학습 과정중 모니터할 지표(metric) 등을 지시한다.
            </div>
            <div>모델 컴파일 후에는 모델 summary를 통해 구축된 모델을 확인</div>
            <div></div>
          </div>
          <div className="nested">
            <div>Concept: 모델학습</div>
            <div>
              손실 함수 값이 최소가 될 때까지 각 층의 가중치와 바이어스를
              업데이트 하는 과정aa
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="nested">
            <div>concept: 평가와 예측 </div>
            <div>
              학습 후, test data를 통해서 모델의 학습 정도를 평가하고 임의의
              데이터를 가지고 예측하기
            </div>
          </div>
        </div>
        <div className="box box3 row3">
          <div className="nested">
            <div>training_data = ...</div>
            <div>validation_data = ...</div>
            <div>testing_datas = ...</div>
          </div>
          <div className="nested">
            <div>model=Sequntial()</div>
            <div>model.add(Flatten(input_shape=(1,)) --- a</div>
            <div>model.add(Dense(2, activation = 'sigmoid') --- b</div>
            <div>model.add(Dense(1, activation = 'relu'))</div>
            <div>model.add(Dense(1, activation = 'softmax'))</div>
            ...
            <div>
              a+b: model.add(Dense(2, activation='sigmoid', input_shape(1,))
            </div>
          </div>
          <div className="nested">
            <div>
              ex 1) model.compile(optimizer=Adam(learning_rate=1e-1),
              loss='categorical__crossentrop')
            </div>
            <div>
              최적화 알고리즘 Adam, 학습률 1e-1, 오차함수
              categorical__crossentrop
            </div>
            <div>
              ex 1) model.compile(optimizer=SGD(learning_rate=0.1), loss='mse',
              metrics==['accuracy']
            </div>
            <div>
              최적화 알고리즘 SGD, 학습률 0.1, 오차함수 mse, 매트릭스는
              accuracy로
            </div>
            <div>
              손실함수의 종류: mse: 제곱근 오차, 이진 분류: binary_crossentropy,
              다중 분류: categorical__crossentropy,
              sparse_categorical__crossentropy{" "}
            </div>
            <div>metrics은 기본적으로 loss만 측정한다. metrics=['loss']</div>
          </div>
          <div className="nested">
            <div>
              model.fit(x_train, t_train, epochs=10, batch_size=100, verbose= 0,
              validation_split= 0.2)
            </div>
            <div>
              1: 입력 데이터, 2: 결과 데이터, 3: 훈련 회수, 4: 배치 사이즈, 5:
              학습데이터의 20%를 검증 데이터로 사용
            </div>
            <div>
              verbose는 학습중 모니터링을 위해 손실값, 정확도, 진행 상태 등의
              출력 형태를 설정, 검증 데이터가 별도로 있다면, validation_split
              대신 validation_data를 이용하여 지정
            </div>
          </div>
          <div className="nested">
            <div>modul.evaluate(x_test, t_test, epochs=10, batch_size=100</div>
            <div>model.precict(x_input_data, batch_size=100)</div>
          </div>
        </div>
        <div className="box box4 row4">
          <div className="nested">Note 1</div>
          <div className="nested">Note 2</div>
          <div className="nested">Note 3</div>
          <div className="nested">Note 4</div>
          <div className="nested">Note 5</div>
        </div>
        <div className="box box5 row5">
          <div className="nested">Summary 1</div>
          <div className="nested">Summary 2</div>
          <div className="nested">Summary 3</div>
          <div className="nested">Summary 4</div>
          <div className="nested">Summary 5</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default V1;
